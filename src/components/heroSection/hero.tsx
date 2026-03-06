'use client';

import './hero.css';
import dynamic from 'next/dynamic';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';

// Desacticar el server side rendering para las particulas, esto lo refactorice haciando particulas un componente
// para no desactivar el ssr en todo Hero, que afecta SEO y demas.
const Particles = dynamic(() => import('./particles'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-col justify-center items-center my-0 mx-auto gap-4 relative z-0 overflow-hidden"
    >
      <Particles quantity={25} />
      <motion.div
        className="gradient-border p-1.25 rounded-full relative z-999"
        initial={{ opacity: 0.4, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo-hero rounded-full p-4 w-37.5 aspect-square flex justify-center items-center text-[4rem]">
          <FaRegUser aria-hidden="true" />
        </div>
      </motion.div>
      <div className="flex flex-col justify-center text-center relative z-999">
        <motion.h1
          className="descriptions-hero-name text-8xl font-semibold text-transparent bg-clip-text pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Daniel Vera Ortiz
        </motion.h1>
        <motion.p
          className="descriptions-hero-work text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Desarrollador Full Stack
        </motion.p>
        <motion.p
          className="descriptions-hero-description w-[55%] text-lg pt-2 pb-6 my-0 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Creando experiencias digitales excepcionales con código limpio y diseño innovador.
          Apasionado por resolver problemas complejos y construir aplicaciones escalables.
        </motion.p>
      </div>
      <motion.div
        className="flex gap-6 relative z-999"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a
          className="social-link group"
          title="GitHub"
          href="hola"
          target="_blank"
          aria-label="link to my github"
        >
          <FiGithub
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-link group"
          title="Linkedin"
          href="hola"
          target="_blank"
          aria-label="link to my linkedin"
        >
          <FaLinkedinIn
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-link group"
          title="email"
          href="hola"
          target="_blank"
          aria-label="my email"
        >
          <MdOutlineEmail
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            aria-hidden="true"
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          className="next-section-hero relative top-8 pt-4 text-[2rem] block z-999"
          aria-label="Next section button"
          href="#about"
          title="Next Section"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDownLong aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}
