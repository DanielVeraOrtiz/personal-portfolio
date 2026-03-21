'use client';

import './contact.css';
import { contactLinks } from '@/config/contact';
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';

interface resError {
  error: string;
  status: number;
  ok: false;
}

interface resValid {
  ok: true;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
  });

  const [formSending, setFormSending] = useState(false);
  const [formSended, setFormSended] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSended(true);
    setFormSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data: resError | resValid = await res.json();

      if (!data.ok) throw new Error(data.error);

      setFormData({
        name: '',
        email: '',
        message: '',
        company: '',
      });

      alert('Mensaje enviado');
    } catch (err) {
      console.error(err);
      alert(err);
      setFormSended(false);
    } finally {
      setFormSending(false);
    }
  };

  const contactData = [
    {
      icon: MdOutlineEmail,
      label: 'Email',
      value: contactLinks.correo,
      href: contactLinks.correoAnchor,
    },
    {
      icon: FiPhone,
      label: 'Número',
      value: contactLinks.numeroTelefono,
      href: contactLinks.numeroTelefonoAnchor,
    },
    {
      icon: SlLocationPin,
      label: 'Ubicación',
      value: contactLinks.ubicacion,
      href: contactLinks.ubicacionAnchor,
    },
  ];

  const availability = [
    'Disponible para trabajo full-time',
    'Modalidad presencial, híbrida o remota',
    'Incorporación inmediata',
  ];

  const formFields = [
    {
      label: 'Nombre Completo',
      id: 'name',
      type: 'text',
      placeholder: 'Tu nombre',
      length: 8,
    },
    {
      label: 'Email',
      id: 'email',
      type: 'email',
      placeholder: 'tu@email.com',
      length: 10,
      pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    },
  ];
  return (
    <section
      id="contact"
      className="w-full 2xl:py-16 py-26 px-4 lg:px-8 justify-center items-center flex flex-col overflow-hidden"
      aria-labelledby="contact-title"
    >
      <motion.h2
        id="contact-title"
        className="contact-title text-transparent text-[3rem] lg:text-[4.5rem] font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
      >
        Contáctame
      </motion.h2>
      <motion.p
        className="contact-subtitle text-lg mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Estoy disponible para oportunidades como desarrollador fullstack. Puedes contactarme
        directamente a través del formulario.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16 w-full xl:w-3/4 justify-center">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="contact-information-title text-2xl font-semibold">
            Informacion de Contacto
          </h3>
          <ul className="flex flex-col gap-6">
            {contactData.map((item, i) => {
              const Icon = item.icon;

              return (
                <li key={i}>
                  <a
                    href={item.href}
                    className="contact-data-container flex gap-4 items-center group"
                    target={item.label === 'Ubicación' ? '_blank' : undefined}
                    rel={item.label === 'Ubicación' ? 'noopener noreferrer' : undefined}
                  >
                    <div className="skill-icon-border rounded-2xl p-0.5 group-hover:scale-115 transition-transform duration-300 ease-in-out">
                      <div className="skill-icon rounded-2xl h-12 w-12 flex justify-center items-center">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                    </div>

                    <div>
                      <p className="contact-type text-sm">{item.label}</p>
                      <p className="contact-data text-lg transition-colors duration-300 ease-in-out">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="contact-available-container rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="contact-schedule-title text-xl font-semibold">Disponibilidad</h3>

            {availability.map((item, i) => (
              <p key={i} className="contact-available">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col gap-4">
                <label htmlFor={field.id} className="font-semibold">
                  {field.label}
                </label>

                <input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  className="contact-form-input mb-2 rounded-2xl px-4 py-4 transition-colors duration-300 ease-in-out"
                  placeholder={field.placeholder}
                  required
                  minLength={field.length}
                  pattern={field.pattern}
                  autoComplete="off"
                />
              </div>
            ))}
            <input
              type="text"
              id="company"
              name="company"
              onChange={handleChange}
              className="hidden"
              autoComplete="off"
            />
            <label htmlFor="message" className="font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="contact-form-input mb-2 rounded-2xl px-4 py-4 flex-1 resize-none transition-colors duration-300 ease-in-out"
              placeholder="Cuéntame sobre la oferta o la oportunidad laboral"
              required
              minLength={50}
              maxLength={600}
            />
            <button
              type="submit"
              disabled={formSended ? true : false}
              className={`${formSended ? 'contact-form-btn-disabled' : 'hover:cursor-pointer contact-form-btn'} flex items-center justify-center gap-2 py-2.5 w-full rounded-xl font-semibold text-center transition-all duration-400 ease-in-out`}
            >
              {!formSending ? (
                formSended ? (
                  <>
                    <FaRegPaperPlane /> Mensaje Enviado
                  </>
                ) : (
                  <>
                    <FaRegPaperPlane /> Enviar Mensaje
                  </>
                )
              ) : (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
