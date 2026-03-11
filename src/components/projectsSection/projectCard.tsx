'use client';

import './projectCard.css';
import { useState, useCallback } from 'react';
// Me ayuda a montar el modal directamente en el div
import { createPortal } from 'react-dom';
import ProjectModal from './projectModal';

interface ProjectCardProps {
  name: string;
  description: string;
  toolsUsed: string[];
  linkDeploy: string;
  linkGitHubBackend: string;
  linkGitHubFrontend: string;
  images: string[];
}

export default function ProjectCard({
  name,
  description,
  toolsUsed,
  linkDeploy,
  linkGitHubBackend,
  linkGitHubFrontend,
  images,
}: ProjectCardProps) {
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
            images={images}
          />,
          document.body,
        )}
      <button
        onClick={openModal}
        className="card-container relative cursor-pointer flex-1 min-w-1/5 rounded-2xl group transition-all duration-300 ease-in-out overflow-hidden text-left"
      >
        <article>
          <div className="w-full aspect-video overflow-hidden group-hover:brightness-40 transition-all duration-300 ease-in-out">
            <img
              className="w-full aspect-video object-cover rounded-tl-2xl rounded-tr-2xl group-hover:scale-110 transition-transform duration-300 ease-in-out"
              src={images[0]}
              alt={`Images from project called ${name}`}
            />
          </div>
          <div className="p-6 pt-4">
            <h3 className="card-title text-xl mb-2 transition-colors duration-300 ease-in-out">
              {name}
            </h3>
            <p className="card-subtitle mb-4">{description}</p>
            <div className="flex gap-2 flex-wrap">
              {toolsUsed.map((tool, index) => (
                <p
                  key={`${index}-${tool}`}
                  className="card-tag-tool rounded-full px-4 py-1 text-sm"
                >
                  {tool}
                </p>
              ))}
            </div>
          </div>
        </article>
      </button>
    </>
  );
}
