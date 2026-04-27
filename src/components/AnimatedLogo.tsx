"use client";

export function AnimatedLogo() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="flex items-end gap-[3px] h-8 w-10">
        <div className="w-1.5 bg-emerald-400 rounded-full animate-[bar-up-down_1s_ease-in-out_infinite] h-[40%]"></div>
        <div className="w-1.5 bg-emerald-400 rounded-full animate-[bar-up-down_1.2s_ease-in-out_infinite_0.2s] h-[70%]"></div>
        <div className="w-1.5 bg-emerald-400 rounded-full animate-[bar-up-down_0.8s_ease-in-out_infinite_0.4s] h-[100%]"></div>
        <div className="w-1.5 bg-emerald-400 rounded-full animate-[bar-up-down_1.1s_ease-in-out_infinite_0.1s] h-[60%]"></div>
        <div className="w-1.5 bg-emerald-400 rounded-full animate-[bar-up-down_0.9s_ease-in-out_infinite_0.3s] h-[85%]"></div>
      </div>
      <span className="font-mono font-bold text-2xl tracking-tighter text-gray-100 group-hover:text-emerald-400 transition-colors">
        victor.dev
      </span>
      
      <style jsx global>{`
        @keyframes bar-up-down {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
}
