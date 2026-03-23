'use client';

import './hero.css';
import dynamic from 'next/dynamic';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FaArrowDownLong } from 'react-icons/fa6';
import { contactLinks } from '@/config/contact';
import { GoDownload } from 'react-icons/go';
import Image from 'next/image';

// Desacticar el server side rendering para las particulas, esto lo refactorice haciando particulas un componente
// para no desactivar el ssr en todo Hero, que afecta SEO y demas.
const Particles = dynamic(() => import('./particles'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen md:py-26 py-26 px-4 flex flex-col justify-center items-center my-0 mx-auto gap-4 relative z-0 overflow-hidden"
    >
      <Particles quantity={25} />
      <motion.div
        className="gradient-border p-1.25 rounded-full relative z-999"
        initial={{ opacity: 0.4, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo-hero overflow-hidden relative rounded-full w-37.5 aspect-square flex justify-center items-center text-[4rem]">
          <Image
            className="object-cover"
            loading="eager"
            src="/face4.png"
            alt="foto mia"
            fill
            sizes="150px"
          />
        </div>
      </motion.div>
      <div className="flex flex-col justify-center text-center relative z-999">
        <motion.h1
          className="descriptions-hero-name text-6xl lg:text-8xl font-semibold text-transparent bg-clip-text pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Daniel Vera Ortiz
        </motion.h1>
        <motion.p
          className="descriptions-hero-work text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Desarrollador Fullstack | UC
        </motion.p>
        <motion.p
          className="descriptions-hero-description md:w-[55%] text-lg pt-2 my-0 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Desarrollo aplicaciones web con React, Next.js y Node.js. Enfocado en código mantenible y
          buenas experiencias de usuario.
        </motion.p>
      </div>
      <motion.a
        className="btn-cv relative z-999 py-2.5 px-5 rounded-xl flex gap-1 items-center my-4"
        href="/face.png"
        download
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8 } }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 5px 10px 0 rgba(255, 0, 0, 0.5)',
          transition: { duration: 0.15 },
        }}
      >
        <GoDownload className="w-5 h-5" />
        Descargar CV
      </motion.a>
      <motion.div
        className="flex gap-6 relative z-999"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          className="social-link group"
          title="GitHub"
          href={contactLinks.githubLink}
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
          href={contactLinks.linkedingLink}
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
          href={contactLinks.correoAnchor}
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
        transition={{ delay: 1.2, duration: 0.8 }}
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
