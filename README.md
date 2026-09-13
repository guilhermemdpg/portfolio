# Portfólio — Guilherme Garcia

Portfólio profissional bilíngue construído com React, TypeScript e Vite. O conteúdo apresenta experiências, cases, competências, formação e currículos para download, com uma identidade visual editorial e interações em canvas.

## Desenvolvimento local

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

A aplicação inicia em `http://localhost:8080`. Se a porta estiver ocupada, o Vite escolherá a próxima disponível.

## Comandos

- `npm run dev` — inicia a prévia local.
- `npm run build` — gera o build de produção em `dist/`.
- `npm run lint` — executa a análise estática.
- `npm run preview` — serve o build de produção localmente.

## Conteúdo e arquivos principais

- `src/config/portfolio.ts` centraliza textos, experiências, projetos, cursos, links e currículos.
- `src/index.css` contém a identidade visual e os estilos responsivos.
- `src/components/SystemCanvas.tsx` controla a experiência gráfica do hero.
- `public/` contém o retrato, currículos, certificados e metadados públicos.

O deploy é feito pelo Netlify a partir do repositório conectado. O arquivo `public/_redirects` mantém o fallback da SPA.
