import { useEffect } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import { MaskLines } from './Reveal';
import { site } from '../config/site';

const YEAR = new Date().getFullYear();
const ease = [0.16, 1, 0.3, 1] as const;

function HeroVisual() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(sy, [-1, 1], [10, -10]);
  const rotY = useTransform(sx, [-1, 1], [-14, 14]);
  const coreX = useTransform(sx, [-1, 1], [-18, 18]);
  const coreY = useTransform(sy, [-1, 1], [-18, 18]);
  const tagX = useTransform(sx, [-1, 1], [26, -26]);
  const tagY = useTransform(sy, [-1, 1], [20, -20]);

  useEffect(() => {
    if (reduce || window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, mx, my]);

  return (
    <motion.div
      className="hero-visual"
      aria-hidden="true"
      initial={{ opacity: 0, scale: reduce ? 1 : 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, delay: 0.3, ease }}
    >
      <motion.div className="machine" style={{ rotateX: rotX, rotateY: rotY }}>
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
        <motion.div className="core" style={{ x: coreX, y: coreY }}>
          <span className="core-shine" />
        </motion.div>
        <div className="orbit">
          <span className="satellite" />
        </div>
      </motion.div>

      <motion.div className="hero-tags" style={{ x: tagX, y: tagY }}>
        <span className="tag tag-a">Design gráfico</span>
        <span className="tag tag-b">Identidade visual</span>
        <span className="tag tag-c">Motion</span>
      </motion.div>

      <svg className="grid-lines" viewBox="0 0 600 600" preserveAspectRatio="none">
        <line x1="300" y1="0" x2="300" y2="600" />
        <line x1="0" y1="300" x2="600" y2="300" />
        <circle cx="300" cy="300" r="3" />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <HeroVisual />

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
