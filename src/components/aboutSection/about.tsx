'use client';

import './about.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="w-full 2xl:py-0 py-26 px-4 lg:px-8 min-h-screen md:min-h-fit 2xl:min-h-screen overflow-hidden flex items-center justify-center flex-col gap-12"
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
              Ingeniero Civil de Industrias con Diploma en Tecnologías de Información de la
              Pontificia Universidad Católica de Chile
            </strong>{' '}
            con enfoque en desarrollo de software y actualmente orientado al{' '}
            <strong className="font-semibold">desarrollo web full stack</strong>.
          </p>

          <br />

          <p>
            Durante mi formación y de manera autodidacta, he desarrollado aplicaciones web
            utilizando{' '}
            <strong className="font-semibold">React, Next.js, Node.js y PostgreSQL</strong>,
            participando tanto en frontend como backend. He trabajado con autenticación JWT, diseño
            de APIs REST, modelamiento de bases de datos relacionales, Dockerización, testing
            automatizado y despliegue de aplicaciones en entornos VPS.
          </p>

          <br />

          <p>
            También he implementado pipelines de{' '}
            <strong className="font-semibold">CI/CD con GitHub Actions</strong>, automatizando
            procesos de testing, build y deployment utilizando Docker y Docker Compose.
          </p>

          <br />

          <p>
            Me interesa desarrollar aplicaciones mantenibles y bien estructuradas, combinando
            experiencia de usuario, buenas prácticas de desarrollo y automatización de despliegues.
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
              Motivación por Aportar y Aprender
              <strong className="ml-auto text-[1.875rem] font-medium">∞</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p className="flex items-center gap-2">
              Proyectos Personales / Universitarios Realizados
              <strong className="ml-auto text-[1.875rem] font-medium">4</strong>
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
