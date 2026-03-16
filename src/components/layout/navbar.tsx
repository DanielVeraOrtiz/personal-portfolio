// Por motion debo hacer un componente de uso de cliente, si usara solo animaciones con css no debo.
// pero estados con react, estados en window y demas necesitan que sea use client.
'use client';

import './navbar.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/themeProvider';

export default function Navbar() {
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

  const { toggleTheme, theme } = useTheme();

  return (
    // la navbar siempre esta en el viewport por ello en motion debo usar animate en lugar de whileInView para todo
    // lo que ya este en pantalla al iniciar. En caso contrario whileInView y viewport con once true o false.
    <motion.header
      className="navbar fixed top-0 left-0 w-full h-[10vh] flex justify-between items-center p-8 z-1 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="w-2/10 logo text-2xl hover:scale-105 hover:cursor-pointer transition-transform duration-200 ease-in-out">
        <span>{'<'}</span>
        Portfolio
        <span>{'/>'}</span>
      </div>

      <ul className="w-6/10 section-anchors flex gap-4 text-base justify-center">
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

      <div className="w-2/10 btn-work-together flex gap-2 items-center justify-end">
        <motion.button
          onClick={toggleTheme}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-toggle-theme p-2 rounded-lg border h-fit transition-all duration-300 group"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {theme === 'light' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5 transition-colors" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5 transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
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
    </motion.header>
  );
}
