'use client';

import './skillTools.css';
import { skillTools } from './skillToosFramworks';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

export default function SkillTools() {
  const [index, setIndex] = useState(0);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(skillTools.length / itemsPerPage);
  const currentPage = index / itemsPerPage;

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
      className="h-screen w-full flex justify-center items-center flex-col"
      aria-labelledby="skill-tools-frameworks"
    >
      <h2
        id="skill-tools-frameworks"
        className="skill-frameworks-title text-[4.5rem] font-semibold"
      >
        Lenguajes & <span className="text-transparent">Tecnologías</span>
      </h2>
      <p className="skill-frameworks-subtitle text-lg mb-12">
        Mis habilidades desglosadas en diferentes lenguajes y frameworks
      </p>
      <div className="flex flex-wrap gap-8 w-3/4 justify-center mb-8">
        {visibleTools.map((skillTool, index) => {
          return (
            <article
              key={index}
              className="skill-tool-container flex-1 min-w-1/5 max-w-1/4 rounded-3xl flex flex-col items-center p-8 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                className="skill-tool-icon mb-2"
                src={skillTool.toolIcon}
                alt={skillTool.toolName}
                width={80}
                height={80}
              />
              <h3 className="skill-tool-title text-xl mb-4 transition-colors duration-300 ease-in-out">
                {skillTool.toolName}
              </h3>
              <p className={`${skillTool.toolSkillClass} rounded-full px-4 py-1 text-sm`}>
                {skillTool.toolSkill}
              </p>
            </article>
          );
        })}
      </div>
      <div className="flex gap-8 text-xl">
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
          ${active ? 'w-8 h-2 page-index' : 'w-2 h-2 bg-gray-400'}`}
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
      </div>
    </section>
  );
}
