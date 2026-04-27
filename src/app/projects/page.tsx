import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Victor",
  description: "A showcase of my backend engineering and system design projects.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100">
          All Projects
        </h1>
        <p className="text-gray-400">
          A comprehensive list of systems, tools, and platforms I&apos;ve built.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
