'use client';

import './about.css';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="w-full h-screen flex items-center justify-center flex-col gap-12"
    >
      <motion.h2
        id="about-title"
        className="about-title-section text-[4.5rem] font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Sobre <span className="text-transparent bg-clip-text">Mí</span>
      </motion.h2>
      <div className="flex gap-16 justify-center">
        <motion.div
          className="about-description w-3/10 text-lg rounded-[20px] p-8 text-justify leading-normal"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            Soy un desarrollador apasionado con más de X años de experiencia en el desarrollo de
            aplicaciones web modernas. Me especializo en crear soluciones innovadoras que combinan
            funcionalidad y diseño excepcional.
          </p>
          <br />
          <p>
            Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando
            las mejores prácticas y las últimas tecnologías del mercado.
          </p>
          <br />
          <p>
            Cuando no estoy programando, me encontrarás aprendiendo nuevas tecnologías,
            contribuyendo a proyectos open source o compartiendo conocimientos con la comunidad.
          </p>
        </motion.div>
        <motion.div
          className="w-3/10 flex flex-col gap-8 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="about-container-data">
            <p className="flex items-center">
              Años de Experiencia Laboral
              <strong className="ml-auto text-[1.875rem] font-medium">0</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p className="flex items-center">
              Proyectos Personales/Universitarios Realizados
              <strong className="ml-auto text-[1.875rem] font-medium">5</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p className="flex items-center">
              Motivación por Aprender y Trabajar
              <strong className="ml-auto text-[1.875rem] font-medium">∞</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
