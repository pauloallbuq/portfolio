import { useState } from 'react';
import { MaskLines, Reveal } from './Reveal';
import { recreacao } from '../data/recreacao';
import { site } from '../config/site';
import { Availability } from './Header';
import { Carousel } from './Carousel';

const YEAR = new Date().getFullYear();

export function Tech() {
  return (
    <section className="section tech" id="tecnologia" aria-labelledby="tech-title">
      <div className="section-head">
        <p className="section-num">(04)</p>
        <h2 id="tech-title" className="section-title">
          <MaskLines lines={['Projetos de', <em key="d">desenvolvimento</em>]} />
        </h2>
      </div>

      <div className="tech-grid">
        <div className="tech-info">
          <Reveal>
            <p className="eyebrow">Projeto de software</p>
            <h3 className="tech-name">{recreacao.title}</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">{recreacao.summary}</p>
            <p className="tech-role">{recreacao.role}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="chips chips-lg" aria-label="Tecnologias">
              {recreacao.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
          <ul className="tech-highlights">
            {recreacao.highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={0.1 + i * 0.06}>
                <span className="tech-hl-num">0{i + 1}</span>
                <p className="tech-hl-title">{h.title}</p>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </ul>
          {(recreacao.links.demo || recreacao.links.repo) && (
            <div className="tech-links">
              {recreacao.links.demo && (
                <a className="btn btn-primary" href={recreacao.links.demo} target="_blank" rel="noopener noreferrer">
                  <span>Ver demonstração</span>
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              )}
              {recreacao.links.repo && (
                <a className="link-underline" href={recreacao.links.repo} target="_blank" rel="noopener noreferrer">
                  Código no GitHub
                </a>
              )}
            </div>
          )}
        </div>

      </div>
      <Reveal className="tech-carousel">
        <Carousel
          variant="screen"
          label="Telas do Recreação Pro"
          slides={recreacao.screenshots.map((sh, i) => ({ ...sh, title: `Tela ${String(i + 1).padStart(2, '0')}`, width: 1896, height: 846 }))}
        />
      </Reveal>
    </section>
  );
}

function SocialLink({ href, label, external = true }: { href: string; label: string; external?: boolean }) {
  if (!href) {
    return (
      <span className="social is-empty" aria-disabled="true" title={`Configure em src/config/site.ts`}>
        <span>{label}</span>
        <small>a configurar</small>
      </span>
    );
  }
  return (
    <a className="social" href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      <span>{label}</span>
      <span className="social-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

export function Contact() {
  const { email, linkedin, github } = site.contact;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="contact" id="contato" aria-labelledby="contato-title">
      <div className="contact-inner">
        <p className="section-num">(05) — Contato</p>
        <h2 id="contato-title" className="contact-title">
          <MaskLines lines={['Vamos criar', <em key="a">algo juntos?</em>]} />
        </h2>
        <Reveal delay={0.15}>
          <p className="contact-text">Projetos, campanhas de CRM, identidade visual ou uma oportunidade no seu time. Me conta o que você tem em mente.</p>
        </Reveal>

        {email ? (
          <Reveal delay={0.2} className="contact-mail">
            <a href={`mailto:${email}?subject=${encodeURIComponent('Contato pelo portfólio')}`} className="mail-big">
              {email}
            </a>
            <button className="copy-btn" onClick={copy} aria-live="polite">
              {copied ? 'Copiado ✓' : 'Copiar e-mail'}
            </button>
          </Reveal>
        ) : (
          <p className="mail-big is-empty">E-mail a configurar em src/config/site.ts</p>
        )}

        <Reveal delay={0.25} className="socials">
          <SocialLink href={linkedin} label="LinkedIn" />
          <SocialLink href={github} label="GitHub" />
          <SocialLink href={email ? `mailto:${email}` : ''} label="E-mail" external={false} />
        </Reveal>

        <Availability />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <span>
        © {YEAR} {site.fullName}
      </span>
      <span className="footer-loc">{site.location}</span>
      <a href="#topo" className="link-underline">
        Voltar ao topo ↑
      </a>
    </footer>
  );
}
