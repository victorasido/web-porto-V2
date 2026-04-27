import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6 pt-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100">
          Hi, I&apos;m Victor.
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-400">
          Backend Engineer
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
          I specialize in designing and building highly scalable, distributed systems, and robust APIs. 
          Passionate about clean architecture, performance optimization, and reliable infrastructure.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-100">
            Featured Projects
          </h3>
          <Link href="/projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            View all &rarr;
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 pt-8 border-t border-gray-800">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-100">
          Get in touch
        </h3>
        <p className="max-w-2xl text-base text-gray-400 leading-relaxed">
          Open to backend engineering roles and interesting projects. Feel free to reach out if you want to collaborate or just say hi.
        </p>
        <div className="flex gap-6 items-center mt-2">
          <a href="mailto:victor@example.com" className="text-sm font-medium text-gray-300 hover:text-white transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-gray-300">
            Email me
          </a>
          <a href="https://github.com/victor" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-gray-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/victor" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-300 hover:text-white transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-gray-300">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
