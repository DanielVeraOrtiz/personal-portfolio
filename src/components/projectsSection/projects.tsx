'use client';

import './projects.css';
import { projects } from './projectData';
import ProjectCard from './projectCard';
import { motion } from 'framer-motion';

export default function Projects() {
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="min-h-screen w-full flex flex-col justify-center items-center py-16"
    >
      <motion.h2
        id="projects-title"
        className="projects-title text-[4.5rem] font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Mis <span className="text-transparent">Proyectos</span>
      </motion.h2>
      <motion.p
        className="projects-subtitle text-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Todos los proyectos universitarios/personales en los que he trabajado
      </motion.p>
      <motion.div
        className="grid grid-cols-3 gap-8 w-3/4 justify-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`${index}-${project.name}`}
            name={project.name}
            description={project.description}
            toolsUsed={project.toolsUsed}
            linkDeploy={project.linkDeploy}
            linkGitHubBackend={project.linkGitHubBackend}
            linkGitHubFrontend={project.linkGitHubFrontend}
            imagesComputer={project.imagesComputer}
            imagesPhone={project.imagesPhone}
            imagesTablet={project.imagesTablet}
          />
        ))}
      </motion.div>
    </section>
  );
}
