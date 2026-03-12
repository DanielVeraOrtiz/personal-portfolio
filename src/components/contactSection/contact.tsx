'use client';

import './contact.css';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 justify-center items-center flex flex-col"
      aria-labelledby="contact-title"
    >
      <motion.h2
        id="contact-title"
        className="contact-title text-transparent text-[4.5rem] font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Contáctame
      </motion.h2>
      <motion.p
        className="contact-subtitle text-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        ¿Tienes un proyecto en mente? No dudes en contactarme
      </motion.p>
      <div className="grid grid-cols-2 gap-16 w-3/4 justify-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Informacion de Contacto</h3>
          <div className="flex gap-4 items-center">
            <div className="skill-icon-border rounded-2xl p-0.5">
              <div className="skill-icon p-4 rounded-2xl h-16 w-16 flex justify-center items-center"></div>
            </div>
            <div>
              <p>Email</p>
              <p>daniel.vera.or@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="skill-icon-border rounded-2xl p-0.5">
              <div className="skill-icon p-4 rounded-2xl h-16 w-16 flex justify-center items-center"></div>
            </div>
            <div>
              <p>Email</p>
              <p>daniel.vera.or@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="skill-icon-border rounded-2xl p-0.5">
              <div className="skill-icon p-4 rounded-2xl h-16 w-16 flex justify-center items-center"></div>
            </div>
            <div>
              <p>Email</p>
              <p>daniel.vera.or@gmail.com</p>
            </div>
          </div>
          <div className="p-8 flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Horario de Disponibilidad</h3>
            <p>Lunes - Viernes: 9:00 - 18:00</p>
            <p>Sábado: 10:00 - 14:00</p>
            <p>Domingo: Cerrado</p>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <label htmlFor="name" className="font-semibold">
              Nombre Completo
            </label>
            <input id="name" type="text" />
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input id="email" type="text" />
            <label htmlFor="message" className="font-semibold">
              Mensaje
            </label>
            <input id="message" type="text" />
          </form>
        </div>
      </div>
    </section>
  );
}
