'use client';

import './skillTools.css';
import { skillTools } from './skillsData';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SkillTools() {
  const [index, setIndex] = useState(0);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(skillTools.length / itemsPerPage);
  const currentPage = index / itemsPerPage;

  // staggerChildren hace que cada hijo del elemento html haga su animacion x segundos despues del anterior
  // hijo. delayChildren hace un delay antes de que empiece staggerChildren
  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const next = () => {
    if (index + itemsPerPage < skillTools.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  const visibleTools = skillTools.slice(index, index + itemsPerPage);
  return (
    <section
      className="2xl:py-0 py-26 px-4 lg:px-8 min-h-screen md:min-h-fit 2xl:min-h-screen w-full flex justify-center items-center flex-col"
      aria-labelledby="skill-tools-frameworks"
    >
      <motion.h2
        id="skill-tools-frameworks"
        className="skill-frameworks-title text-[3rem] lg:text-[4.5rem] font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Lenguajes & <span className="text-transparent">Tecnologías</span>
      </motion.h2>
      <motion.p
        className="skill-frameworks-subtitle text-lg text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Mis habilidades desglosadas en diferentes lenguajes y frameworks
      </motion.p>
      <motion.div
        key={index}
        className="flex flex-wrap gap-8 w-full xl:w-3/4 justify-center mb-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {visibleTools.map((skillTool, i) => (
          // Abajo no se coloca ni initial, ni animate o whileInView. Esto se debido a que este elemento
          // hereda lo definido en su padre. Por ello, inicialmente ejecuta hidden y en whileInView ejecutara
          // show, con lo cual solo con las llaves se las arregla.

          // Al final cuando el padre use hidden, el hijo buscara y usara hidden en su objeto pasado en variants.
          <motion.article
            key={`${i}-${skillTool.toolName}`}
            variants={item}
            transition={{ duration: 0.8 }}
            className="skill-tool-container relative flex-1 lg:min-w-1/5 lg:max-w-1/4 md:min-w-1/4 md:max-w-1/3 min-w-9/20 max-w-1/2 rounded-3xl flex flex-col items-center p-8 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              className="skill-tool-icon mb-2"
              src={skillTool.toolIcon}
              alt={skillTool.toolName}
              width={80}
              height={80}
            />

            <h3 className="skill-tool-title text-center text-xl mb-4 transition-colors duration-300 ease-in-out">
              {skillTool.toolName}
            </h3>

            <p className={`${skillTool.toolSkillClass} rounded-full px-4 py-1 text-sm`}>
              {skillTool.toolSkill}
            </p>
          </motion.article>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-8 text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <button
          onClick={prev}
          aria-label="Previous tools skills"
          className="btn-change p-4 rounded-full cursor-pointer transition-color duration-300 ease-in-out hover:scale-105"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <div className="flex items-center justify-center gap-3 w-20">
          {Array.from({ length: totalPages }).map((_, i) => {
            const active = i === currentPage;

            return (
              <div
                key={i}
                className={`transition-all duration-300 ease-in-out rounded-full
          ${active ? 'w-8 h-2 page-index-active' : 'w-2 h-2 page-index-deactivated'}`}
              />
            );
          })}
        </div>
        <button
          onClick={next}
          aria-label="Next tools skills"
          className="btn-change p-4 rounded-full cursor-pointer transition-color duration-300 ease-in-out hover:scale-105"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </motion.div>
    </section>
  );
}
