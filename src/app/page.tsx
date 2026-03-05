import Hero from '@/components/heroSection/hero';
import About from '@/components/aboutSection/about';

// Es un portafolio, solo una pagina con toda la informacion, por lo que trabajaremos los componentes por separado
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
