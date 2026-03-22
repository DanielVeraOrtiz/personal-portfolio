'use client';

import './projectModal.css';
import { useRef, useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { MdOutlineSmartphone } from 'react-icons/md';
import { IoTabletPortraitSharp } from 'react-icons/io5';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { IoIosResize } from 'react-icons/io';
import Image from 'next/image';

interface ProjectModalProps {
  open: boolean;
  closeModal: () => void;
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

export default function ProjectModal({
  open,
  closeModal,
  name,
  description,
  toolsUsed,
  linkDeploy,
  linkGitHubBackend,
  linkGitHubFrontend,
  imagesComputer,
  imagesPhone,
  imagesTablet,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState(imagesComputer);
  const [zoomedImage, setZoomedImage] = useState<boolean>(false);

  const hasLinks =
    linkDeploy !== 'No disponible' ||
    linkGitHubFrontend !== 'No disponible' ||
    linkGitHubBackend !== 'No disponible';

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

  const changeResolution = (type: string) => {
    if (type === 'pc' && images !== imagesComputer) {
      setImages(imagesComputer);
      setCurrent(0);
    }
    if (type === 'phone' && images !== imagesPhone) {
      setImages(imagesPhone);
      setCurrent(0);
    }
    if (type === 'tablet' && images !== imagesTablet) {
      setImages(imagesTablet);
      setCurrent(0);
    }
  };

  return (
    <>
      {open && (
        <div
          ref={modalRef}
          className="fixed inset-0 modal-backdrop backdrop-blur-sm flex items-center justify-center z-1"
          onClick={closeModal}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              closeModal();
            }
          }}
        >
          <motion.div
            className={`modal-container ${zoomedImage ? 'aspect-video 2xl:translate-y-[2vh]' : ' xl:translate-y-0'} translate-y-[5vh] rounded-2xl xl:max-w-full 2xl:max-w-8/10 max-w-150 mx-2 xl:mx-8 2xl:mx-2 flex flex-col xl:flex-row relative max-h-[80dvh]`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0.75, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="carrusel flex-3 relative rounded-tl-2xl rounded-bl-2xl">
              <div className="other-resolution absolute w-60 -top-24 right-1/2 translate-x-1/2 flex flex-col gap-2 text-2xl">
                <h3 className="other-resolution-title text-center text-xl font-semibold transition-opacity duration-300 ease-in-out">
                  Vista por dispositivo
                </h3>
                <div className="flex gap-4 justify-center">
                  <button
                    className={`${images === imagesComputer ? 'other-resolution-btn-selected' : 'other-resolution-btn'} group p-2 rounded-full transition-all duration-300 ease-in-out`}
                    aria-label="Ver versión escritorio"
                    title="Ver versión escritorio"
                    onClick={() => changeResolution('pc')}
                    disabled={images === imagesComputer}
                  >
                    <HiOutlineDesktopComputer
                      aria-hidden="true"
                      className={`${images === imagesComputer ? '' : 'group-hover:scale-110'} transition-transform duration-300 ease-in-out`}
                    />
                  </button>
                  <button
                    className={`${images === imagesTablet ? 'other-resolution-btn-selected' : 'other-resolution-btn'} group p-2 rounded-full transition-all duration-300 ease-in-out`}
                    aria-label="Ver versión tablet"
                    title="Ver versión tablet"
                    onClick={() => changeResolution('tablet')}
                    disabled={images === imagesTablet}
                  >
                    <IoTabletPortraitSharp
                      aria-hidden="true"
                      className={`${images === imagesTablet ? '' : 'group-hover:scale-110'} transition-transform duration-300 ease-in-out`}
                    />
                  </button>
                  <button
                    className={`${images === imagesPhone ? 'other-resolution-btn-selected' : 'other-resolution-btn'} group p-2 rounded-full transition-all duration-300 ease-in-out`}
                    aria-label="Ver versión móvil"
                    title="Ver versión móvil"
                    onClick={() => changeResolution('phone')}
                    disabled={images === imagesPhone}
                  >
                    <MdOutlineSmartphone
                      aria-hidden="true"
                      className={`${images === imagesPhone ? '' : 'group-hover:scale-110'} transition-transform duration-300 ease-in-out`}
                    />
                  </button>
                </div>
              </div>
              <div className="absolute right-0 text-2xl -top-14 z-50 hidden xl:block">
                <button
                  className="expand-btn group p-2 rounded-full transition-all duration-300 ease-in-out"
                  onClick={() => setZoomedImage((prev) => !prev)}
                  aria-label={
                    zoomedImage
                      ? 'Reducir el tamaño del carrusel'
                      : 'Ampliar el tamaño del carrusel'
                  }
                  title={
                    zoomedImage
                      ? 'Reducir el tamaño del carrusel'
                      : 'Ampliar el tamaño del carrusel'
                  }
                >
                  <IoIosResize
                    className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="overflow-x-hidden aspect-video">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Image ${i + 1} from project called ${name}`}
                      className={` ${zoomedImage ? 'rounded-2xl' : 'rounded-tl-2xl rounded-tr-2xl xl:rounded-tr-none xl:rounded-bl-2xl'} w-full h-full object-contain modal-image shrink-0`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex absolute top-1/2 justify-between w-full items-center px-4">
                <button
                  aria-label="Imagen previa"
                  onClick={prev}
                  className="carrusel-btn-change p-4 rounded-full cursor-pointer -translate-y-1/2 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <FaChevronLeft />
                </button>

                <button
                  aria-label="Imagen siguiente"
                  onClick={next}
                  className="carrusel-btn-change p-4 rounded-full cursor-pointer -translate-y-1/2 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <FaChevronRight />
                </button>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: images.length }).map((_, i) => {
                  const active = i === current;

                  return (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className={`transition-all duration-300 ease-in-out rounded-full cursor-pointer
        ${active ? 'w-8 h-2 image-index-active' : 'w-2 h-2 image-index-deactivated'}`}
                    />
                  );
                })}
              </div>
            </div>
            <div
              className={`${zoomedImage ? 'hidden' : 'flex-2'} p-8 justify-between flex flex-col gap-4 max-h-[50vh] lg:max-h-screen overflow-y-scroll xl:overflow-y-hidden`}
            >
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
                {!hasLinks && (
                  <p className="text-sm font-normal text-project-university">
                    Código y demo no disponibles por tratarse de un proyecto académico colaborativo.
                  </p>
                )}
                {linkDeploy !== 'No disponible' ? (
                  <a
                    href={linkDeploy}
                    className="deploy-link min-w-6/10 py-2.5 block overflow-hidden rounded-xl transition-all duration-400 ease-in-out"
                    target="_blank"
                  >
                    Ver <i>Deploy</i>
                  </a>
                ) : (
                  <></>
                )}
                {linkGitHubFrontend !== 'No disponible' ? (
                  <a
                    href={linkGitHubFrontend}
                    className="github-link flex-1 flex items-center justify-center gap-2 min-w-4/10 py-2.5 px-5 overflow-hidden rounded-xl transition-all duration-400 ease-in-out"
                    target="_blank"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>
                      Código <i>Frontend</i>
                    </span>
                  </a>
                ) : (
                  <></>
                )}
                {linkGitHubBackend !== 'No disponible' ? (
                  <a
                    href={linkGitHubBackend}
                    className="github-link flex-1 flex items-center justify-center gap-2 min-w-4/10 py-2.5 px-5 overflow-hidden rounded-xl transition-all duration-400 ease-in-out"
                    target="_blank"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>
                      Código <i>Backend</i>
                    </span>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
