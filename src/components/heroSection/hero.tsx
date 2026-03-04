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
    <section id="hero" className="hero-section">
      <Particles quantity={25} />
      <motion.div
        className="gradient-border"
        initial={{ opacity: 0.4, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo-hero">
          <FaRegUser aria-hidden="true" />
        </div>
      </motion.div>
      <div className="descriptions-hero">
        <motion.h1
          className="descriptions-hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Daniel Vera Ortiz
        </motion.h1>
        <motion.p
          className="descriptions-hero-work"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Desarrollador Full Stack
        </motion.p>
        <motion.p
          className="descriptions-hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Creando experiencias digitales excepcionales con código limpio y diseño innovador.
          Apasionado por resolver problemas complejos y construir aplicaciones escalables.
        </motion.p>
      </div>
      <motion.div
        className="social-links-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <a title="GitHub" href="hola" target="_blank" aria-label="link to my github">
          <FiGithub className="social-link-icon" aria-hidden="true" />
        </a>
        <a title="Linkedin" href="hola" target="_blank" aria-label="link to my linkedin">
          <FaLinkedinIn className="social-link-icon" aria-hidden="true" />
        </a>
        <a title="email" href="hola" target="_blank" aria-label="my email">
          <MdOutlineEmail className="social-link-icon" aria-hidden="true" />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          className="next-section-hero"
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
