import './projects.css';
import { projects } from './projectData';
import ProjectCard from './projectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="min-h-screen w-full flex flex-col justify-center items-center"
    >
      <h2 id="projects-title" className="projects-title text-[4.5rem] font-semibold">
        Mis <span className="text-transparent">Proyectos</span>
      </h2>
      <p className="projects-subtitle text-lg mb-12">
        Todos los proyectos universitarios/personales en los que he trabajado
      </p>
      <div className="flex flex-wrap gap-8 w-3/4 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`${index}-${project.name}`}
            name={project.name}
            description={project.description}
            toolsUsed={project.toolsUsed}
            linkDeploy={project.linkDeploy}
            linkGitHub={project.linkGitHub}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}
