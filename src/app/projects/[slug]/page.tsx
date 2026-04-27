import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

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

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Victor`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors w-fit"
        >
          <ArrowLeftIcon />
          Back to Projects
        </Link>
        
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-100">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400">
          <time dateTime={project.date}>
            {new Date(project.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </time>
          <span className="text-gray-700">•</span>
          <div className="flex gap-4">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
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
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1.5 text-sm font-medium text-gray-200 bg-gray-800 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </section>

        {project.architecture && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-100">Architecture</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.architecture}
            </p>
          </section>
        )}

        {project.challenges && (
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-100">Key Challenges</h2>
            <p className="text-gray-400 leading-relaxed">
              {project.challenges}
            </p>
          </section>
        )}
      </div>
    </article>
  );
}
