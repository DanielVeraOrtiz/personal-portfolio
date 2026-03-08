import './skill.css';
import { IoCodeSlash } from 'react-icons/io5';
import { GoDatabase } from 'react-icons/go';
import { GrTest } from 'react-icons/gr';
import { AiOutlineDatabase } from 'react-icons/ai';

export default function Skills() {
  const skills = [
    {
      skillName: 'Desarrollo frontend',
      skillTech: ['React', 'Next.js', 'Ruby on Rails', 'Typescript'],
      icon: IoCodeSlash,
    },
    {
      skillName: 'Desarrollo backend',
      skillTech: ['Ruby on Rails', 'Koa', 'Node', 'Javascript'],
      icon: AiOutlineDatabase,
    },
    {
      skillName: 'Bases de datos',
      skillTech: ['PostgreSQL'],
      icon: GoDatabase,
    },
    {
      skillName: 'Testing',
      skillTech: ['Jest', 'Supertest', 'Playwright'],
      icon: GrTest,
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
              className="skill-container flex w-3/10 flex-col p-8 rounded-3xl text-center items-center hover:scale-500 transition-all duration-300 ease-in-out"
            >
              <div className="skill-icon-border rounded-2xl mb-4 p-0.5">
                <div className="skill-icon p-4 rounded-2xl h-16 w-16 flex justify-center items-center">
                  <Icon aria-hidden="true" className="h-8 w-8" />
                </div>
              </div>
              <h3 className="skill-title text-xl mb-2 transition-colors duration-300 ease-in-out">
                {skill.skillName}
              </h3>
              <p className="skill-tech">{tech}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
