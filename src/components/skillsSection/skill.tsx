import './skill.css';
import { FaLocationArrow } from 'react-icons/fa';

export default function Skills() {
  const skills = [
    {
      skillName: 'Desarrollo frontend',
      skillTech: ['React', 'Next.js', 'Typescript', 'Vue.js'],
      icon: FaLocationArrow,
    },
    {
      skillName: 'Desarrollo frontend',
      skillTech: ['React', 'Next.js', 'Typescript', 'Vue.js'],
      icon: FaLocationArrow,
    },
    {
      skillName: 'Desarrollo frontend',
      skillTech: ['React', 'Next.js', 'Typescript', 'Vue.js'],
      icon: FaLocationArrow,
    },
    {
      skillName: 'Desarrollo frontend',
      skillTech: ['React', 'Next.js', 'Typescript', 'Vue.js'],
      icon: FaLocationArrow,
    },
    {
      skillName: 'Desarrollo frontend',
      skillTech: ['React', 'Next.js', 'Typescript', 'Vue.js'],
      icon: FaLocationArrow,
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="w-full h-screen flex justify-center items-center flex-col"
    >
      <h2 className="skill-title-section text-[4.5rem] font-semibold">
        Mis <span className="text-transparent bg-clip-text">Habilidades</span>
      </h2>
      <p className="skill-subtitle text-lg mb-16">
        Tecnologías y herramientas con las que trabajo para crear soluciones excepcionales
      </p>
      <div className="flex flex-wrap gap-8 w-3/4 justify-center">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const tech = skill.skillTech.join(', ');
          return (
            <article
              key={index}
              className="skill-container flex w-3/10 flex-col p-8 rounded-3xl text-center items-center"
            >
              <div className="skill-icon-border rounded-2xl bg-amber-500 mb-4 p-0.5">
                <div className="skill-icon p-4 rounded-2xl h-16 w-16 flex justify-center items-center">
                  <Icon aria-hidden="true" className="h-8 w-8" />
                </div>
              </div>
              <h3 className="skill-title text-xl mb-2">{skill.skillName}</h3>
              <p className="skill-tech">{tech}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
