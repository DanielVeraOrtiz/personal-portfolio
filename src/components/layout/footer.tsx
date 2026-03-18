import './footer.css';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

// Sin framer motion por que va ultimo y con ello sera solo server component.
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: MdOutlineEmail, href: 'mailto:daniel.vera.or@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="logo-footer text-2xl mb-4">
              <span>{'<'}</span>
              Portfolio
              <span>{'/>'}</span>
            </h3>
            <p className="message-footer text-base">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>
          <nav aria-label="Enlaces del sitio">
            <h4 className="footer-subtitle mb-4 text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="section-anchors-footer space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li
                  key={label}
                  className="w-fit transition-colors duration-200 ease-in-out relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4 className="footer-subtitle mb-4 text-lg font-semibold">Sígueme</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center group social-link-footer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 ease-in-out" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright pt-8 text-center">
          <p className="message-footer flex items-center justify-center">
            Hecho con <span className="footer-icon-heart mx-2">♥</span> por Daniel Vera Ortiz ©{' '}
            {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
