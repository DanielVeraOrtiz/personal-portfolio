'use client';

import './about.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="w-full 2xl:py-0 py-26 px-4 lg:px-8 min-h-screen md:min-h-fit 2xl:min-h-screen  flex items-center justify-center flex-col gap-12"
    >
      <motion.h2
        id="about-title"
        className="about-title-section text-[3rem] lg:text-[4.5rem] font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Sobre <span className="text-transparent bg-clip-text">Mí</span>
      </motion.h2>
      <div className="flex gap-8 justify-center flex-col md:flex-row">
        <motion.div
          className="xl:w-5/10 2xl:w-7/20 md:w-6/10 about-description text-lg rounded-[20px] p-8 text-justify leading-normal"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            Soy{' '}
            <strong className="font-semibold">
              Ingeniero Industrial TI de la Universidad Católica
            </strong>{' '}
            con enfoque en desarrollo de software, actualmente orientado al{' '}
            <strong className="font-semibold">desarrollo web fullstack</strong>.
          </p>
          <br />
          <p>
            Durante mi formación y de manera autodidacta, he trabajado en la construcción de
            aplicaciones utilizando{' '}
            <strong className="font-semibold">React, Next.js y Node.js</strong>, desarrollando tanto
            frontend como backend. He implementado autenticación con JWT, manejo de APIs,
            modelamiento de bases de datos y testing automatizado a nivel unitario, de integración y
            end-to-end.
          </p>
          <br />
          <p>
            Me interesa el desarrollo frontend, creando interfaces claras y bien estructuradas, sin
            descuidar la lógica y el backend, siempre con código limpio y enfoque en UX.
          </p>
        </motion.div>
        <motion.div
          className="xl:w-5/10 2xl:w-7/20 md:w-4/10 flex flex-col gap-8 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="about-container-data">
            <p className="flex items-center gap-2">
              Años de Experiencia Laboral
              <strong className="ml-auto text-[1.875rem] font-medium">0</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p className="flex items-center gap-2">
              Proyectos Personales / Universitarios Realizados
              <strong className="ml-auto text-[1.875rem] font-medium">5</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p className="flex items-center gap-2">
              Tecnologías Trabajadas
              <strong className="ml-auto text-[1.875rem] font-medium">8+</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
