'use client';

import './skill.css';
import { skills } from './skillsData';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="2xl:py-0 py-26 px-4 lg:px-8 min-h-screen md:min-h-fit 2xl:min-h-screen w-full flex justify-center items-center flex-col"
    >
      <motion.h2
        className="skill-title-section text-[3rem] lg:text-[4.5rem] font-semibold"
        id="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Mis <span className="text-transparent bg-clip-text">Habilidades</span>
      </motion.h2>
      <motion.p
        className="skill-subtitle text-lg mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Tecnologías y herramientas con las que trabajo para crear soluciones excepcionales
      </motion.p>
      <div className="flex flex-wrap gap-8 w-full xl:w-3/4 justify-center">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const tech = skill.skillTech.join(', ');
          return (
            <motion.article
              key={index}
              className="skill-container flex w-full sm:w-[45%] lg:w-[30%] flex-col p-8 rounded-3xl text-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
            >
              <div className="skill-icon-border rounded-2xl mb-4 p-0.5">
                <div className="skill-icon p-4 rounded-2xl h-16 w-16 flex justify-center items-center">
                  <Icon aria-hidden="true" className="h-8 w-8" />
                </div>
              </div>
              <h3 className="skill-title text-xl mb-2 transition-colors duration-300 ease-in-out">
                {skill.skillName}
              </h3>
              <p className="skill-tech">{tech}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
