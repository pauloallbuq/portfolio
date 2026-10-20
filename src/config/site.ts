/**
 * CONFIGURAÇÃO CENTRAL DO PORTFÓLIO
 * Edite apenas este arquivo para atualizar links, contato e disponibilidade.
 * Campos vazios ('') aparecem no site como "a configurar" e ficam desativados.
 */
export const site = {
  name: 'Paulo Ricardo',
  fullName: 'Paulo Ricardo Albuquerque Silva',
  brand: 'PAULO RICARDO',
  role: 'Designer Gráfico & Criativo — Comunicação Visual',
  photo: 'https://i.ibb.co/LhkBRkdf/Whats-App-Image-2026-08-04-at-23-26-02-1.jpg', // ou '/paulo.jpg' em /public
  location: 'Teresina, Piauí — Brasil',

  availability: {
    show: true,
    open: true, // true = disponível | false = agenda fechada
    label: 'Disponível para novos projetos',
    closedLabel: 'Agenda fechada no momento',
  },

  contact: {
    email: 'Pr33456@gmail.com', // fonte: currículo
    linkedin: 'https://www.linkedin.com/in/paulo-albuquerque-9267a71b9/',
    whatsapp: '5586994723073', // só números, com DDI e DDD
    whatsappLabel: '+55 (86) 99472-3073',
    github: '', // ex.: https://github.com/seu-usuario
  },

  url: '', // domínio final, ex.: https://pauloricardo.design (usado em SEO/OG)
} as const;
