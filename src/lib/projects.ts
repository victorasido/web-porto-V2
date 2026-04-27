import { projects, Project } from "../data/projects";

export function getAllProjects(): Project[] {
  // Return projects sorted by date descending
  return [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
