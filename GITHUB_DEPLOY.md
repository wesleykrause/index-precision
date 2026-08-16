# Deploy no GitHub Pages — Precision Automotive Brasil

O site estático já está na **raiz** deste repositório:

```
/index.html
/css/style.css
/js/script.js
/assets/images/
/.nojekyll
```

## Publicar
1. Envie o projeto para o GitHub (botão "Save to GitHub" na Emergent).
2. No GitHub: **Settings → Pages**.
3. Em *Source*: branch `main` e pasta **/ (root)**.
4. Salvar. Site no ar em `https://SEU_USUARIO.github.io/SEU_REPO/`.

## Editar depois
Tudo em `js/script.js` → objeto `CONFIG` (WhatsApp, telefone, Instagram, cidades, preços, textos, depoimentos).

> Observação: as pastas `frontend/` e `backend/` existem apenas do ambiente de desenvolvimento da Emergent e **não interferem** no GitHub Pages — ele serve apenas o `index.html` da raiz e os arquivos referenciados (css/js/assets).
