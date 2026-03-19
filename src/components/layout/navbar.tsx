// Por motion debo hacer un componente de uso de cliente, si usara solo animaciones con css no debo.
// pero estados con react, estados en window y demas necesitan que sea use client.
'use client';

import './navbar.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

const ButtonTheme = dynamic(() => import('./buttonTheme'), {
  ssr: false,
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // En lugar de repetir en el html, mejor un map
  // Typescript en general a datos de fuentes externas, props, variables limitadas a ciertos estados y
  // estados complejos. Solo asi, debido a que typescript infiere bien muchos tipos. Por ejemplo:
  // el tipo de abajo lo infiere bien.
  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    // la navbar siempre esta en el viewport por ello en motion debo usar animate en lugar de whileInView para todo
    // lo que ya este en pantalla al iniciar. En caso contrario whileInView y viewport con once true o false.
    <motion.header
      className="navbar fixed top-0 left-0 w-screen h-23 z-1"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="px-8 flex justify-between items-center backdrop-blur-md h-full">
        <div className="w-5/10 lg:w-3/10">
          <a
            href="#"
            className="w-fit rounded-xl py-2 px-1 flex gap-2 logo hover:cursor-pointer transition-colors duration-200 ease-in-out"
          >
            <Image className="rounded-full" src="/face.png" alt="foto mia" width={40} height={40} />
            <div>
              <p className="logo-text-name text-base font-semibold">Daniel Vera</p>
              <p className="logo-text-work text-xs">Desarrollador Full Stack</p>
            </div>
          </a>
        </div>

        <ul className="hidden lg:flex w-4/10 section-anchors gap-4 text-base justify-center">
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className="transition-colors duration-200 ease-in-out relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              <motion.a
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex w-5/10 lg:w-3/10 btn-work-together gap-2 items-center justify-end">
          <ButtonTheme />
          {/* Ojo que motion es inline css, entonces sus scale sobrescribiran mis scale por ejemplo */}
          <motion.a
            className="py-2.5 px-5 cursor-pointer block overflow-hidden rounded-xl"
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.4 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 5px 10px 0 rgba(255, 0, 0, 0.5)',
              transition: { duration: 0.15 },
            }}
          >
            Trabajemos Juntos
          </motion.a>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ButtonTheme />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-menu p-2 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="w-6 h-6" aria-hidden="true" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute z-1 left-0 top-[9vh] mobile-menu lg:hidden w-full backdrop-blur-md"
          >
            <div className="relative z-1 px-8 py-6 w-full">
              <ul className="section-anchors text-base flex flex-col gap-3 justify-center items-center">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className="w-fit transition-colors duration-200 ease-in-out relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                  >
                    <a key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="btn-work-together mt-4 w-1/2 text-center mx-auto">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-5 cursor-pointer block overflow-hidden rounded-xl transition-all duration-400 ease-in-out"
                >
                  Trabajemos Juntos
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
