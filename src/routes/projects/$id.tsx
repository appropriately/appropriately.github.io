import { projects } from "@/assets/items/projects";
import { getImageUrl } from "@/utils/images";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$id")({
  loader: ({ params }: { params: { id: string } }) => {
    const project = projects.find((p) => p.id === params.id);
    if (!project) {
      throw notFound();
    }
    return { project };
  },
  component: ProjectDetailsPage,
});

function ProjectDetailsPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="container mx-auto px-6 pt-25">
      <h1>{project.title}</h1>
      {project.mainImage && (
        <img src={getImageUrl(project.mainImage)} alt={project.title} />
      )}
    </div>
  );
}
