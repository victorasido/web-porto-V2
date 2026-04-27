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
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between border border-gray-800 rounded-xl p-6 bg-[#0f0f0f] hover:border-gray-600 transition-colors h-full">
      <div>
        <div className="flex justify-between items-start mb-4">
          <Link href={`/projects/${project.slug}`} className="text-xl font-semibold text-gray-100 hover:text-white transition-colors">
            {project.title}
          </Link>
          <div className="flex gap-3 text-gray-400">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Repository">
                <GithubIcon />
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Live Demo">
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
