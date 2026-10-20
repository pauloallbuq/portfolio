import { motion, useReducedMotion } from 'motion/react';
import { MaskLines } from './Reveal';
import { site } from '../config/site';

const YEAR = new Date().getFullYear();
const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">

      <div className="hero-meta">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
          (Portfólio — {YEAR})
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          {site.role}
        </motion.span>
      </div>

      <h1 className="hero-title" id="hero-title">
        <MaskLines
          inView={false}
          delay={0.15}
          lines={[
            <>Ideias visuais.</>,
            <>
              <em>Experiências</em>
            </>,
            <>que conectam.</>,
          ]}
        />
      </h1>

      <div className="hero-bottom">
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9, ease }}
        >
          Há <strong>8 anos</strong> transformando estratégias em comunicação visual. Unindo design, movimento e tecnologia para criar
          experiências digitais.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9, ease }}
        >
          <a href="#projetos" className="btn btn-primary">
            <span>Explorar projetos</span>
            <span className="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="#sobre" className="link-underline">
            Conheça minha história
          </a>
        </motion.div>
      </div>

      <a href="#projetos" className="scroll-cue" aria-label="Rolar para os projetos">
        <span className="scroll-cue-line" />
        <span>Role</span>
      </a>
    </section>
  );
}

const disciplines = ['Design gráfico', 'Identidade visual', 'Social media', 'Motion design', 'Comunicação visual', 'Templates HTML', 'Desenvolvimento web'];

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {disciplines.map((d) => (
        <li key={d}>
          {d}
          <span className="marquee-star" aria-hidden="true">✳</span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" role="region" aria-label="Áreas de atuação">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
