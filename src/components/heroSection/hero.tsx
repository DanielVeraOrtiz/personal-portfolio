'use client';

import './hero.css';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="gradient-border">
        <div className="logo-hero">
          <FaRegUser aria-hidden="true" />
        </div>
      </div>
      <div className="descriptions-hero">
        <h1 className="descriptions-hero-name">Daniel Vera Ortiz</h1>
        <p className="descriptions-hero-work">Desarrollador Full Stack</p>
        <p className="descriptions-hero-description">
          Creando experiencias digitales excepcionales con código limpio y diseño innovador.
          Apasionado por resolver problemas complejos y construir aplicaciones escalables.
        </p>
      </div>
      <div className="social-links-hero">
        <a title="GitHub" href="hola" target="_blank" aria-label="link to my github">
          <FiGithub className="social-link-icon" aria-hidden="true" />
        </a>
        <a title="Linkedin" href="hola" target="_blank" aria-label="link to my linkedin">
          <FaLinkedinIn className="social-link-icon" aria-hidden="true" />
        </a>
        <a title="email" href="hola" target="_blank" aria-label="my email">
          <MdOutlineEmail className="social-link-icon" aria-hidden="true" />
        </a>
      </div>
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
    </section>
  );
}
