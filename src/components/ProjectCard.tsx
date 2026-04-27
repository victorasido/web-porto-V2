import Link from "next/link";
import { Project } from "../data/projects";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.15 5.4 3.15a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/>
    <path d="M9 20c-5 1.5-5-2.5-7-3"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col justify-between border border-gray-800 rounded-xl p-8 bg-[#0f0f0f] hover:border-emerald-500/30 hover:bg-emerald-500/[0.02] transition-all cursor-pointer h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-gray-100 group-hover:text-emerald-400 transition-colors font-mono">
            {project.title}
          </h3>
          <div className="flex gap-4 text-gray-400">
            {project.githubLink && (
              <button 
                onClick={(e) => { e.stopPropagation(); window.open(project.githubLink, '_blank'); }} 
                className="hover:text-white transition-colors" 
                aria-label="GitHub Repository"
              >
                <GithubIcon />
              </button>
            )}
          </div>
        </div>
        <p className="text-base text-gray-400 mb-8 leading-relaxed font-sans">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5 mt-auto">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-3 py-1 text-xs font-semibold text-gray-300 bg-gray-800/80 rounded-md font-mono border border-gray-700/50">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
