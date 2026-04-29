"use client";

import { MermaidViewer } from "./MermaidViewer";
import { Project } from "@/data/projects";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.15 5.4 3.15a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/>
    <path d="M9 20c-5 1.5-5-2.5-7-3"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
    <line x1="6" x2="6.01" y1="6" y2="6"/>
    <line x1="6" x2="6.01" y1="18" y2="18"/>
  </svg>
);

const PresentationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

interface ProjectDetailViewProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetailView({ project, onClose }: ProjectDetailViewProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0d0d0d] border border-gray-800 rounded-2xl shadow-2xl flex flex-col min-h-full md:min-h-0">
        {/* Sticky Header inside Modal */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0d0d0d]/90 backdrop-blur border-b border-gray-800 rounded-t-2xl">
          <h2 className="text-xl font-bold font-mono text-emerald-400 truncate pr-4">
            {project.title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800/80 rounded-full text-gray-400 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:bg-emerald-500/10 transition-all duration-300"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-10 space-y-12">
          {/* Top Info */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400">
              <time dateTime={project.date} className="font-mono">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
              <span className="text-gray-700">|</span>
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all duration-300 px-3 py-1.5 rounded-md hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
                  >
                    <GithubIcon />
                    Repository
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all duration-300 px-3 py-1.5 rounded-md hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
                {project.pptUrl && (
                  <a
                    href={project.pptUrl}
                    download
                    className="inline-flex items-center gap-2 hover:text-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)] transition-all duration-300 px-3 py-1.5 rounded-md hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
                  >
                    <PresentationIcon />
                    Download PPT
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg md:text-xl border-l-4 border-emerald-400/30 pl-6 py-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack + Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-800/50">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 font-mono">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium text-gray-200 bg-gray-800/50 border border-gray-700 rounded-md font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.infrastructure && project.infrastructure.length > 0 && (
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 font-mono flex items-center gap-1.5">
                  <ServerIcon />
                  Infrastructure
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.infrastructure.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm font-medium text-sky-300 bg-sky-950/20 border border-sky-800/30 rounded-md font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Architecture */}
          {project.architecture && (
            <section className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-100 font-mono">Architecture</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.architecture}
              </p>
            </section>
          )}

          {/* Mermaid Diagram */}
          {project.mermaidDiagram && (
            <section className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-100 font-mono">System Design</h3>
              <div className="bg-[#111] p-4 md:p-8 rounded-xl border border-gray-800">
                <MermaidViewer chart={project.mermaidDiagram} />
              </div>
            </section>
          )}

          {/* Challenges */}
          {project.challenges && (
            <section className="flex flex-col gap-4 pb-6">
              <h3 className="text-2xl font-bold text-gray-100 font-mono">Key Challenges & Proof</h3>
              <div className="text-gray-400 leading-relaxed whitespace-pre-line text-lg bg-emerald-400/5 p-6 rounded-xl border border-emerald-400/10">
                {project.challenges}
              </div>
            </section>
          )}

          {/* PPT Viewer Section */}
          {project.pptUrl && (
            <section className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-100 font-mono">Project Presentation</h3>
                <span className="text-xs text-gray-500 font-mono italic">Requires internet for preview</span>
              </div>
              <div className="relative w-full aspect-video bg-[#111] rounded-xl border border-gray-800 overflow-hidden group">
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                    typeof window !== 'undefined' ? window.location.origin + project.pptUrl : project.pptUrl
                  )}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                >
                  This browser does not support inline PDFs. Please download the PDF to view it: [Download PDF]
                </iframe>
                <div className="absolute inset-0 pointer-events-none border border-emerald-500/10 group-hover:border-emerald-500/20 transition-colors"></div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
