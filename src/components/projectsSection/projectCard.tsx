'use client';

import './projectCard.css';
import { useState, useCallback } from 'react';
// Me ayuda a montar el modal directamente en el div
import { createPortal } from 'react-dom';
import ProjectModal from './projectModal';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  name: string;
  description: string;
  toolsUsed: string[];
  linkDeploy: string;
  linkGitHubBackend: string;
  linkGitHubFrontend: string;
  imagesComputer: string[];
  imagesPhone: string[];
  imagesTablet: string[];
}

export default function ProjectCard({
  name,
  description,
  toolsUsed,
  linkDeploy,
  linkGitHubBackend,
  linkGitHubFrontend,
  imagesComputer,
  imagesPhone,
  imagesTablet,
}: ProjectCardProps) {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      {open &&
        createPortal(
          <ProjectModal
            open={open}
            closeModal={closeModal}
            name={name}
            description={description}
            toolsUsed={toolsUsed}
            linkDeploy={linkDeploy}
            linkGitHubBackend={linkGitHubBackend}
            linkGitHubFrontend={linkGitHubFrontend}
            imagesComputer={imagesComputer}
            imagesPhone={imagesPhone}
            imagesTablet={imagesTablet}
          />,
          document.body,
        )}
      <motion.button
        onClick={openModal}
        className="card-container relative cursor-pointer rounded-2xl group transition-all duration-300 ease-in-out overflow-hidden text-left"
        variants={item}
        transition={{ duration: 0.8 }}
      >
        <article className="flex flex-col h-full justify-start">
          <div className="w-full aspect-video overflow-hidden group-hover:brightness-40 transition-all duration-300 ease-in-out">
            <img
              className="w-full aspect-video object-cover rounded-tl-2xl rounded-tr-2xl group-hover:scale-110 transition-transform duration-300 ease-in-out"
              src={imagesComputer[0]}
              alt={`Images from project called ${name}`}
            />
          </div>
          <div className="p-6 pt-4">
            <h3 className="card-title text-xl mb-2 transition-colors duration-300 ease-in-out">
              {name}
            </h3>
            <p className="card-subtitle mb-4 overflow-hidden text-ellipsis display-webkit-box webkit-box-orient-vertical webkit-line-clamp-3">
              {description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {toolsUsed.slice(0, 6).map((tool, index) => (
                <p
                  key={`${index}-${tool}`}
                  className="card-tag-tool rounded-full px-4 py-1 text-sm"
                >
                  {tool}
                </p>
              ))}
              {toolsUsed[6] && (
                <p key="Mas tools" className="card-tag-tool rounded-full px-4 py-1 text-sm">
                  +{toolsUsed.length - 1}
                </p>
              )}
            </div>
          </div>
        </article>
      </motion.button>
    </>
  );
}
