/**
 * RECREAÇÃO PRO — conteúdo da seção Tecnologia.
 * ATENÇÃO: o código do projeto não estava disponível durante a criação deste site.
 * Os itens abaixo vêm do que você já descreveu sobre o projeto (stack e arquitetura).
 * Revise com base no código real antes de publicar e adicione as capturas em /public/recreacao/.
 */
export const recreacao = {
  title: 'Recreação Pro',
  summary:
    'Sistema web de gestão para empresas de recreação infantil, pensado como SaaS multiempresa: cada empresa opera seus próprios dados em uma única aplicação.',
  role: 'Projeto pessoal de desenvolvimento — concepção, interface e código.',
  stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
  highlights: [
    { title: 'Multiempresa', text: 'Banco compartilhado com isolamento de dados por empresa.' },
    { title: 'Acesso do responsável', text: 'Login do proprietário de cada empresa; equipe cadastrada pelo administrador.' },
    { title: 'Painel separado', text: 'Gestão operacional separada do painel administrativo do sistema.' },
    { title: 'Em português', text: 'Interface em pt-BR e valores em reais.' },
  ],
  /** Adicione capturas reais: { src: '/recreacao/painel.webp', alt: 'Painel principal do Recreação Pro' } */
  screenshots: [
    { src: 'https://i.ibb.co/Z1Hg5NBP/Captura-de-tela-2026-10-19-192722.webp', alt: 'Tela do Recreação Pro' },
    { src: 'https://i.ibb.co/VYbJCFhk/Captura-de-tela-2026-10-19-192638.webp', alt: 'Tela do Recreação Pro' },
    { src: 'https://i.ibb.co/35WDh0Yf/tela-02.webp', alt: 'Tela do Recreação Pro' },
    { src: 'https://i.ibb.co/JFtQ1kPs/tela-04.webp', alt: 'Tela do Recreação Pro' },
    { src: 'https://i.ibb.co/7xnK0cdp/tela-05.webp', alt: 'Tela do Recreação Pro' },
    { src: 'https://i.ibb.co/HyR8RFh/tela-06.webp', alt: 'Tela do Recreação Pro' },
  ] as { src: string; alt: string }[],
  /** Links opcionais — deixe vazio para ocultar */
  links: { demo: '', repo: '' },
};
