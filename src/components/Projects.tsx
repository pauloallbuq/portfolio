import { projects } from '../data/projects';
import { Carousel } from './Carousel';
import { MaskLines, Reveal } from './Reveal';

const artSlides = projects
  .filter((p) => p.category === 'arte' && p.image)
  .map((p) => ({ src: p.image!, alt: p.alt ?? p.title, title: p.title, width: p.width, height: p.height }));

export function Projects() {
  return (
    <section className="section projects" id="projetos" aria-labelledby="projetos-title">
      <div className="section-head">
        <p className="section-num">(01)</p>
        <h2 id="projetos-title" className="section-title">
          <MaskLines lines={['Projetos', <em key="s">artísticos</em>]} />
        </h2>
        <Reveal className="section-aside" delay={0.2}>
          <p>Peças de design gráfico. Arraste, use as setas ou clique em uma imagem para ampliar.</p>
        </Reveal>
      </div>
      <Reveal>
        <Carousel slides={artSlides} label="Projetos artísticos" variant="portrait" />
      </Reveal>
    </section>
  );
}
