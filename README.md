# Portfólio — Paulo Ricardo

React + TypeScript + Vite + Motion.

## Rodar
```bash
npm install
npm run dev       # desenvolvimento (http://localhost:5173)
npm run build     # verificação TypeScript + build de produção em dist/
npm run preview   # serve o build
```

## Onde editar
| O quê | Arquivo |
|---|---|
| E-mail, LinkedIn, GitHub, disponibilidade, domínio | `src/config/site.ts` |
| Projetos (imagens, textos, ferramentas, contribuição) | `src/data/projects.ts` |
| Recreação Pro (stack, destaques, capturas, links) | `src/data/recreacao.ts` |
| Imagens dos projetos | `public/projects/` |
| Capturas do Recreação Pro | `public/recreacao/` |
| Imagem de compartilhamento | `public/og-image.png` (1200×630) |

Todo projeto marcado `placeholder: true` exibe uma arte provisória identificada como "Placeholder · substituir imagem".

## Deploy
Netlify/Vercel: build `npm run build`, pasta `dist`. Depois de ter o domínio, preencha `url` em `site.ts` e troque os caminhos de `og:image` no `index.html` por URL absoluta.
