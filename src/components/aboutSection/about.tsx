import './about.css';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="about-section">
      <h2 id="about-title" className="about-title-section">
        Sobre <span>Mí</span>
      </h2>
      <div className="about-container">
        <div className="about-description">
          <p>
            Soy un desarrollador apasionado con más de X años de experiencia en el desarrollo de
            aplicaciones web modernas. Me especializo en crear soluciones innovadoras que combinan
            funcionalidad y diseño excepcional.
          </p>
          <br />
          <p>
            Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre buscando
            las mejores prácticas y las últimas tecnologías del mercado.
          </p>
          <br />
          <p>
            Cuando no estoy programando, me encontrarás aprendiendo nuevas tecnologías,
            contribuyendo a proyectos open source o compartiendo conocimientos con la comunidad.
          </p>
        </div>
        <div className="about-data">
          <div className="about-container-data">
            <p>
              Años de Experiencia Laboral<strong>0</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p>
              Proyectos Personales/Universitarios Realizados<strong>5</strong>
            </p>
          </div>
          <div className="about-container-data">
            <p>
              Motivación por Aprender y Trabajar<strong>∞</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
