/**
 * PROJETOS
 * Imagens hospedadas no ImgBB. Para hospedar junto com o site, baixe cada arquivo para
 * /public/projects/ e troque `image` por '/projects/nome.webp'.
 * Ajuste título, descrição e ferramentas de cada peça conforme o trabalho real.
 */
export type CategoryId = 'arte' | 'dev';

export const categories: { id: CategoryId; label: string; short: string }[] = [
  { id: 'arte', label: 'Projetos artísticos', short: 'Artísticos' },
  { id: 'dev', label: 'Projetos de desenvolvimento', short: 'Desenvolvimento' },
];

export type Project = {
  id: string;
  title: string;
  category: CategoryId;
  year?: string;
  description: string;
  tools: string[];
  contribution: string;
  image?: string;
  alt?: string;
  width?: number;
  height?: number;
  placeholder: boolean;
  layout: 'wide' | 'tall' | 'square';
};

const art = (id: string, title: string, image: string, width: number, height: number): Project => ({
  id,
  title,
  category: 'arte',
  description: 'Peça de design gráfico. Edite esta descrição em src/data/projects.ts.',
  tools: ['Photoshop', 'Illustrator'],
  contribution: 'Criação e direção de arte.',
  image,
  alt: `Arte gráfica — ${title}`,
  width,
  height,
  placeholder: false,
  layout: 'tall',
});

export const projects: Project[] = [
  art('odd-argentina', 'Aquisição Argentina', 'https://i.ibb.co/VWh5Wzbh/ODD-AQUISI-O-ARGENTINA-22-06-FEED.webp', 1080, 1440),
  art('arte-01', 'Peça 01', 'https://i.ibb.co/wZ1vZp00/01.webp', 735, 919),
  art('nba-feed', 'NBA', 'https://i.ibb.co/HL8Gfh4r/NBA-FEED.webp', 1080, 1440),
  art('arte-02', 'Peça 02', 'https://i.ibb.co/k6JrbtcW/02.webp', 736, 915),
  art('nfl-2008', 'NFL', 'https://i.ibb.co/NdN9Jbfz/NFL-2008-2.webp', 1080, 1920),
  art('arte-03', 'Peça 03', 'https://i.ibb.co/1GQCJM5S/03.webp', 736, 920),
  art('arte-05', 'Peça 04', 'https://i.ibb.co/KxRphbRq/05.webp', 736, 920),
  art('arte-06', 'Peça 05', 'https://i.ibb.co/8gpRJSvy/8ba043cb0ed13934ebaffeb7744314e3.webp', 736, 920),
  {
    id: 'recreacao-pro',
    title: 'Recreação Pro',
    category: 'dev',
    description: 'Sistema web de gestão para empresas de recreação infantil. Detalhes na seção Tecnologia.',
    tools: ['React', 'Node.js', 'PostgreSQL'],
    contribution: 'Concepção, interface e desenvolvimento.',
    image: 'https://i.ibb.co/Z1Hg5NBP/Captura-de-tela-2026-10-19-192722.webp',
    alt: 'Tela do sistema Recreação Pro',
    width: 1915,
    height: 853,
    placeholder: false,
    layout: 'wide',
  },
];
