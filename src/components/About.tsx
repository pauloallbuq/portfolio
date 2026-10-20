import { MaskLines, Reveal } from './Reveal';
import { site } from '../config/site';

const experience = [
  { period: 'Atual', role: 'Designer de Comunicação Direta & CRM', place: 'Comunicação visual para casas de aposta', detail: 'E-mail, pop-up, inbox, push e SMS. Templates estruturados em HTML e criação de artes na plataforma Smartico.' },
  { period: '1 ano', role: 'Designer Gráfico & Digital', place: 'Agência Vision', detail: 'Identidades visuais, peças publicitárias, mídias sociais e motion design.' },
  { period: '4 anos', role: 'Designer Gráfico e Operador de Plotagem', place: 'Empresa do setor gráfico', detail: 'Fluxo completo: concepção da arte, fechamento de arquivos, pré-impressão e plotagem.' },
];

const education = [
  { title: 'Análise e Desenvolvimento de Sistemas', place: 'Faculdade Estácio — cursando' },
  { title: 'Curso Design Gráfico Completo — 10 cursos do zero ao avançado', place: 'André Fontenelle' },
  { title: 'Design Gráfico e Visual de Alto Nível', place: 'Marcos Schmitt' },
  { title: 'After Effects para Motion Design — básico ao avançado', place: 'Yogo Costa' },
];

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="section-head">
        <p className="section-num">(02)</p>
        <h2 id="sobre-title" className="section-title">
          <MaskLines lines={['Sobre', <em key="m">mim</em>]} />
        </h2>
      </div>

      <div className="about-grid">
        <Reveal className="about-figure">
          {site.photo && (
            <div className="about-photo">
              <img src={site.photo} alt={`Foto de ${site.fullName}`} width={1536} height={1536} loading="lazy" decoding="async" />
            </div>
          )}
          <div className="about-number" aria-hidden="true">
            08
          </div>
          <p className="about-number-label">anos de design gráfico</p>
        </Reveal>

        <div className="about-text">
          <Reveal>
            <p className="lead">
              Sou {site.fullName}, designer gráfico com 8 anos de experiência. Hoje me dedico à comunicação direta e ao CRM, criando
              as peças que chegam ao usuário por <span className="hl">e-mail, pop-up, inbox, push e SMS</span>.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Atuo na criação de artes para o segmento de apostas, onde cada peça precisa ser clara, rápida de ler e consistente entre
              canais. Também estruturo templates em HTML a partir dessas artes.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Antes disso, passei por agência criando identidades visuais, peças publicitárias, social media e motion design, e por
              uma empresa do setor gráfico, onde aprendi o processo de ponta a ponta, da arte à impressão. Atualmente curso Análise e
              Desenvolvimento de Sistemas na Faculdade Estácio, o que aproxima o design da tecnologia no meu dia a dia.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="timeline">
        <Reveal>
          <h3 className="subhead">Trajetória</h3>
        </Reveal>
        <ol>
          {experience.map((e, i) => (
            <Reveal as="li" key={e.role} delay={i * 0.08} className="timeline-item">
              <span className="timeline-period">{e.period}</span>
              <div>
                <p className="timeline-role">{e.role}</p>
                <p className="timeline-place">{e.place}</p>
              </div>
              <p className="timeline-detail">{e.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="education">
        <Reveal>
          <h3 className="subhead">Formação e cursos</h3>
        </Reveal>
        <ul>
          {education.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 0.06}>
              <p>{e.title}</p>
              <span>{e.place}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const professional = [
  'Comunicação direta — e-mail, pop-up, inbox, push e SMS',
  'Artes para o segmento de apostas',
  'Identidade visual e peças publicitárias',
  'Social media, motion flyer e edição de vídeo',
  'Fechamento de arquivo e pré-impressão',
];

const tools = [
  { abbr: 'Ps', name: 'Photoshop' },
  { abbr: 'Ai', name: 'Illustrator' },
  { abbr: 'Ae', name: 'After Effects' },
  { abbr: 'Pr', name: 'Premiere' },
  { abbr: 'Fg', name: 'Figma' },
  { abbr: 'Sm', name: 'Smartico', note: 'criação de artes e comunicação visual' },
];

const code = [
  { name: 'HTML e CSS', level: 'Uso no trabalho' },
  { name: 'Estruturação de templates HTML', level: 'Uso no trabalho' },
  { name: 'JavaScript', level: 'Noções' },
  { name: 'Python', level: 'Noções' },
  { name: 'PHP', level: 'Noções' },
];

export function Skills() {
  return (
    <section className="section skills" aria-labelledby="skills-title">
      <div className="section-head">
        <p className="section-num">(03)</p>
        <h2 id="skills-title" className="section-title">
          <MaskLines lines={['Ferramentas &', <em key="c">competências</em>]} />
        </h2>
      </div>

      <div className="skills-grid">
        <Reveal className="skills-col">
          <h3 className="subhead">
            <span className="subhead-num">A</span> Experiência profissional
          </h3>
          <ul className="skills-list">
            {professional.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="skills-col" delay={0.1}>
          <h3 className="subhead">
            <span className="subhead-num">B</span> Ferramentas
          </h3>
          <ul className="tools">
            {tools.map((t) => (
              <li key={t.name}>
                <span className="tool-abbr" aria-hidden="true">
                  {t.abbr}
                </span>
                <span className="tool-name">
                  {t.name}
                  {t.note && <small>{t.note}</small>}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="skills-col" delay={0.2}>
          <h3 className="subhead">
            <span className="subhead-num">C</span> Programação <small>em desenvolvimento</small>
          </h3>
          <ul className="code-list">
            {code.map((c) => (
              <li key={c.name}>
                <span>{c.name}</span>
                <span className={`level ${c.level === 'Noções' ? 'is-basic' : ''}`}>{c.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
