import { ProjectCard } from "@components/ProjectCard";
import { projects } from "@default/Projects";

export function Page() {
  return (
    <div className="not-prose">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p>
        Thanks for showing interest in visiting my projects. Please visit the
        repos and other links provided with each project. Consider giving a star
        if you like it.
      </p>
      {projects.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}
    </div>
  );
}
