import { Header } from './components/Header';
import { Hero, Marquee } from './components/Hero';
import { Projects } from './components/Projects';
import { About, Skills } from './components/About';
import { Tech, Contact, Footer } from './components/TechContact';

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Skills />
        <Tech />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
