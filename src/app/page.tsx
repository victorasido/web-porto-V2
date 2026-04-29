"use client";

import { useState } from "react";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { Project } from "@/data/projects";

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function Home() {
  const allProjects = getAllProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col gap-32 py-4 md:py-12 w-full">
      {/* Hero */}
      <section id="home" className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 pt-10 md:pt-20 items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base font-bold text-emerald-400 tracking-[0.2em] uppercase font-mono">
               [ System Online ] — Open to Opportunities
            </p>
            <h1 className="text-7xl md:text-[7rem] leading-none font-bold tracking-tighter text-emerald-400 font-mono">
              Hi, I&apos;m<br/>Victor.
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-100 font-mono mt-4 leading-tight">
              Backend Engineer &amp; Systems Architect
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-[90%]">
            I architect high-throughput async pipelines and distributed systems that don&apos;t buckle under pressure.
            Every byte optimized. Every failure anticipated. Built to scale, designed to last.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-5 items-center mt-6">
            <a
              href="/CV_Victor_Asido_T.pdf"
              download
              className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-400 text-gray-950 font-bold font-mono text-lg rounded-sm hover:bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-all"
            >
              <DownloadIcon />
              Download Resume
            </a>
            <a
              href="https://github.com/victorasido"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 border-2 border-gray-700 rounded-sm text-gray-300 font-mono text-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="hidden lg:flex flex-col justify-center items-end h-full">
          {/* Live Backend Terminal Graphic */}
          <div className="relative w-full max-w-lg bg-[#0d0d0d] rounded-2xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10 overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="text-[10px] text-gray-500 ml-2 uppercase tracking-widest">victor_backend_srv</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 space-y-4 text-sm sm:text-base">
              <div className="flex gap-3">
                <span className="text-emerald-400">➜</span>
                <span className="text-gray-300">init_distributed_engine --scale=auto</span>
              </div>
              
              <div className="space-y-1.5 opacity-80">
                <div className="flex gap-2">
                  <span className="text-gray-500">[0.001s]</span>
                  <span className="text-blue-400">INFO</span>
                  <span className="text-gray-400">Connecting to PostgreSQL cluster...</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">[0.045s]</span>
                  <span className="text-emerald-400">SUCCESS</span>
                  <span className="text-gray-400">DB_CONNECTED: pool_size=50</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">[0.102s]</span>
                  <span className="text-blue-400">INFO</span>
                  <span className="text-gray-400">Starting gRPC server on :50051</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">[0.158s]</span>
                  <span className="text-yellow-400">WARN</span>
                  <span className="text-gray-400">High traffic detected, scaling workers...</span>
                </div>
                <div className="flex gap-2 animate-pulse">
                  <span className="text-gray-500">[0.210s]</span>
                  <span className="text-emerald-400">SCALING</span>
                  <span className="text-gray-400">Adding 5 instances of AURA_NODE_V2</span>
                </div>
              </div>
              
              {/* Animated Cursor */}
              <div className="flex gap-3 items-center">
                <span className="text-emerald-400">➜</span>
                <div className="w-2.5 h-5 bg-emerald-400 animate-[pulse_1s_infinite]"></div>
              </div>
            </div>

            {/* Decorative Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_100%)]"></div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="flex flex-col gap-10">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <h3 className="text-3xl font-bold tracking-tight text-gray-100 font-mono">
            Full Portfolio
          </h3>
          <p className="text-gray-400 font-mono text-sm">
            Total Projects: {allProjects.length}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="flex flex-col gap-8 pt-10">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <h3 className="text-3xl font-bold tracking-tight text-gray-100 font-mono">
            Arsenal &amp; Tech Stack
          </h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            "Python", "Google Colab", "Looker Studio", "Google Data Studio", "Java", 
            "JavaScript", "Bun", "TypeScript", "PHP", "Laravel", "Angular", 
            "CSS", "PostgreSQL", "Oracle", "Git"
          ].map((tech) => (
            <span 
              key={tech} 
              className="px-5 py-2.5 bg-[#121212] border border-gray-800 rounded-sm text-gray-300 font-mono text-sm hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectDetailView 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
