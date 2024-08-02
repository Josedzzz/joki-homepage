import { projects } from "../utils/projects";
import Project from "./Project";

export default function ProjectsPanel() {
  return (
    <main className="flex flex-col gap-10 p-4 mx-auto max-w-xl appear-bottom">
      <h2 className="text-xl sm:text-xl md:text-2xl text-blue-400 font-bold">
        Projects and Collaborations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              image={project.image}
              title={project.title}
              text={project.text}
              reference={project.reference}
            />
          );
        })}
      </div>
    </main>
  );
}
