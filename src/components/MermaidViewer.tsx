"use client";

import { useEffect, useRef, useState } from "react";

interface MermaidViewerProps {
  chart: string;
}

export function MermaidViewer({ chart }: MermaidViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function renderChart() {
      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            darkMode: true,
            background: "#0f0f0f",
            mainBkg: "#1a1a1a",
            nodeBorder: "#374151",
            clusterBkg: "#111827",
            titleColor: "#f9fafb",
            edgeLabelBackground: "#111827",
            nodeTextColor: "#e5e7eb",
            lineColor: "#4b5563",
            primaryColor: "#1f2937",
            primaryTextColor: "#f3f4f6",
            primaryBorderColor: "#374151",
            secondaryColor: "#111827",
            tertiaryColor: "#0f172a",
          },
        });

        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart.trim());

        if (!cancelled) {
          setSvg(renderedSvg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Mermaid render error:", err);
          setError("Failed to render diagram.");
        }
      }
    }

    renderChart();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="rounded-xl border border-red-900/50 bg-red-950/20 p-4 text-sm text-red-400">
        {error}
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="flex h-48 items-center justify-center rounded-xl border border-gray-800 bg-[#0f0f0f]">
        <span className="text-sm text-gray-500 animate-pulse">Rendering diagram...</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto rounded-xl border border-gray-800 bg-[#0f0f0f] p-6"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
