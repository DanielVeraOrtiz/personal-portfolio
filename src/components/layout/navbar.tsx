'use client';

import './navbar.css';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="logo">
        <span>{'<'}</span>
        Portfolio
        <span>{'/>'}</span>
      </div>

      <ul className="section-anchors">
        {navLinks.map((link, index) => (
          <li key={link.label}>
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

      <div className="btn-work-together">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.025 }}
        >
          Trabajemos Juntos
        </motion.a>
      </div>
    </motion.header>
  );
}
