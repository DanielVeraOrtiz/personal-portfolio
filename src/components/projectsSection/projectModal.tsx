'use client';

import './projectModal.css';
import { useRef, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { MdOutlineSmartphone } from 'react-icons/md';
import { IoTabletPortraitSharp } from 'react-icons/io5';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

interface ProjectModalProps {
  open: boolean;
  closeModal: () => void;
  name: string;
  description: string;
  toolsUsed: string[];
  linkDeploy: string;
  linkGitHubBackend: string;
  linkGitHubFrontend: string;
  images: string[];
}

export default function ProjectModal({
  open,
  closeModal,
  name,
  description,
  toolsUsed,
  linkDeploy,
  linkGitHubBackend,
  linkGitHubFrontend,
  images,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (open) {
      modalRef.current?.focus();
    }
  }, [open]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {open && (
        <div
          ref={modalRef}
          className="fixed inset-0 modal-backdrop backdrop-blur-sm flex items-center justify-center z-999"
          onClick={closeModal}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeModal();
            }
          }}
        >
          <div
            className="modal-container rounded-2xl w-3/4 flex"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="carrusel flex-3 relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out aspect-video"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Image ${i + 1} from project called ${name}`}
                    className="w-full h-full object-contain bg-black shrink-0 rounded-tl-2xl"
                  />
                ))}
              </div>

              <div className="flex absolute top-1/2 justify-between w-full items-center px-4">
                <button
                  aria-label="Previous image"
                  onClick={prev}
                  className="btn-change p-4 rounded-full cursor-pointer -translate-y-1/2 hover:scale-105"
                >
                  <FaChevronLeft />
                </button>

                <button
                  aria-label="Next image"
                  onClick={next}
                  className="btn-change p-4 rounded-full cursor-pointer -translate-y-1/2 hover:scale-105"
                >
                  <FaChevronRight />
                </button>
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button className="btn-change p-2 rounded-full">
                  <MdOutlineSmartphone />
                </button>
                <button className="btn-change p-2 rounded-full">
                  <IoTabletPortraitSharp />
                </button>
                <button className="btn-change p-2 rounded-full">
                  <HiOutlineDesktopComputer />
                </button>
              </div>
            </div>
            <div className="flex-2 p-8 justify-between flex flex-col">
              <div className="flex flex-col gap-4 text-justify">
                <h3 className="modal-title text-3xl font-semibold text-transparent">{name}</h3>
                <p className="modal-description text-lg">{description}</p>
                <h4 className="modal-tools text-lg font-semibold">Tecnologías utilizadas</h4>
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
              <div className="flex flex-wrap gap-4 justify-center text-center font-semibold">
                <a
                  href={linkDeploy}
                  className="deploy-link min-w-6/10 py-2.5 block overflow-hidden rounded-xl"
                >
                  Ver <i>Deploy</i>
                </a>
                <a
                  href={linkGitHubFrontend}
                  className="github-link flex-1 min-w-4/10 py-2.5 px-5 block overflow-hidden rounded-xl"
                >
                  Código <i>Frontend</i>
                </a>
                <a
                  href={linkGitHubBackend}
                  className="github-link flex-1 min-w-4/10 py-2.5 px-5 block overflow-hidden rounded-xl"
                >
                  Código <i>Backend</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
