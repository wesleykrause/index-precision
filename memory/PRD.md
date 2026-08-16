# PRD — Precision Automotive Brasil (Site institucional estático)

## Problem statement (original)
Site profissional premium para "Precision Automotive Brasil" — diagnóstico eletrônico automotivo, scanner multimarcas, codificação e personalização em Curitiba, Araucária e região. Estética preto+vermelho, tecnológica, premium; totalmente estático e exportável para GitHub Pages (HTML/CSS/JS puro, sem backend/DB/Node). WhatsApp em vários pontos + formulário que gera mensagem e abre WhatsApp.

## Arquitetura
- 100% estático em `/app/frontend/public/` (index.html, css/style.css, js/script.js, assets/images).
- React entry (`src/App.js`) renderiza `null`; `src/index.css`/`App.css` esvaziados para não sobrescrever o site estático no preview.
- Smooth scroll: Lenis via CDN. Reveals: IntersectionObserver + CSS. Sem dependências de build.
- Export pronto p/ publicação: `/app/precision-automotive-site/` (com README e .nojekyll).

## Config editável (js/script.js → CONFIG)
WhatsApp `5541997548811`; Instagram `@precisionautobrasil`; CNPJ `68.332.596/0001-60`; região Curitiba/Araucária/RMC; preços de/por reais fornecidos pelo cliente.

## Implementado (2026-06)
- Header fixo transparente→sólido + menu hamburger mobile.
- Hero com headline (reveal linha a linha) + painel de diagnóstico animado (ECU/ABS/AIRBAG/TCM/BCM/CAN, wave CAN-bus, voltagem/RPM/temp/DTC ao vivo).
- Marquee editorial; Serviços (6 cards, preço de/por, orçamento→WhatsApp por serviço); Preços (5 valores promocionais); Marcas (18); Diferenciais (6, numerados); Seção tecnológica showpiece (rede de módulos CAN gateway com pulsos animados); Como funciona (timeline 01–04); Formulário→WhatsApp; Prova social (3 editáveis); CTA final; Footer; botão WhatsApp flutuante.
- SEO (title/description/OG/favicon), responsivo mobile-first, 0 overflow horizontal.

## Verificação
- Screenshots desktop+mobile OK; hrefs WhatsApp (6) corretos com mensagens por serviço; Instagram OK; hamburger abre; overflow horizontal = 0; 6 serviços renderizados.

## Backlog (P1/P2)
- P1: Galeria de fotos reais do trabalho; mapa da região; depoimentos reais.
- P2: Página de blog/artigos técnicos; múltiplos idiomas; integração com Google Analytics.

## Next tasks
- Substituir depoimentos placeholder pelos reais.
- Adicionar fotos reais da oficina/equipamentos.
