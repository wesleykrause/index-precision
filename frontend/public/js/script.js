/* ============================================================================
   PRECISION AUTOMOTIVE BRASIL — script.js
   Site 100% estático (GitHub Pages). Sem backend / sem banco de dados.
   ============================================================================ */

/* ============================================================================
   ⚙️  CONFIGURAÇÃO  — ALTERE AQUI FACILMENTE
   ----------------------------------------------------------------------------
   • WHATSAPP  ....... número (só dígitos, com DDI 55 + DDD)
   • INSTAGRAM ....... link do perfil
   • ENDEREÇO/REGIÃO . texto de atendimento
   • PREÇOS .......... valores de/por de cada serviço
   • DEPOIMENTOS ..... prova social (troque pelos reais)
   ============================================================================ */
const CONFIG = {
  // 📱 WhatsApp — apenas dígitos. (41) 99754-8811  =>  55 41 99754 8811
  whatsapp: "5541997548811",

  // 📷 Instagram (EDITAR)
  instagram: "https://instagram.com/precisionautobrasil",

  // 📍 Região de atendimento (EDITAR)
  address: "Curitiba • Araucária • Região Metropolitana",

  // 🧾 CNPJ / Nota Fiscal
  cnpj: "68.332.596/0001-60",

  // 💬 Mensagem padrão do WhatsApp (header, hero, flutuante, CTA)
  defaultMessage:
    "Olá! Vim pelo site da Precision Automotive e gostaria de mais informações sobre o diagnóstico do meu veículo.",

  /* ---------------- SERVIÇOS (ícone + textos + preço) ----------------
     price: { old, now }  ->  usa "de/por".  Use { now: "Consultar" } p/ sem preço. */
  services: [
    {
      key: "diagnostico",
      icon: "scan",
      title: "Diagnóstico Completo",
      desc: "Leitura de falhas, códigos, testes dos sistemas eletrônicos e relatório completo.",
      price: { old: "199,90", now: "129,90" },
      msg: "Olá! Vim pelo site da Precision Automotive e gostaria de solicitar um Diagnóstico Completo para meu veículo.",
    },
    {
      key: "scanner",
      icon: "chip",
      title: "Scanner Multimarcas",
      desc: "Diagnóstico de diversos módulos e sistemas automotivos de veículos nacionais e importados.",
      price: { now: "Consultar" },
      msg: "Olá! Vim pelo site da Precision Automotive e gostaria de um diagnóstico com Scanner Multimarcas.",
    },
    {
      key: "codificacao",
      icon: "code",
      title: "Codificação de Módulos",
      desc: "Codificação, programações e personalizações de módulos e funções do veículo.",
      price: { old: "299,90", now: "199,90" },
      msg: "Olá! Vim pelo site da Precision Automotive e gostaria de solicitar Codificação de Módulos / Funções.",
    },
    {
      key: "avaliacao",
      icon: "search",
      title: "Avaliação Pré-Compra",
      desc: "Análise completa dos módulos eletrônicos, falhas ocultas e relatórios para compra segura.",
      price: { old: "249,90", now: "159,90" },
      msg: "Olá! Vim pelo site da Precision Automotive e gostaria de uma Avaliação Pré-Compra com Scanner.",
    },
    {
      key: "dpf",
      icon: "filter",
      title: "Diagnóstico e Regeneração de DPF",
      desc: "Análise do sistema de DPF/FAP e regeneração quando aplicável, para veículos modernos.",
      price: { old: "349,90", now: "249,90" },
      msg: "Olá! Vim pelo site da Precision Automotive e gostaria de um Diagnóstico/Regeneração de DPF.",
    },
    {
      key: "bateria",
      icon: "battery",
      title: "Teste de Bateria e Carga",
      desc: "Avaliação completa da bateria, alternador e sistema de carga do veículo.",
      price: { old: "99,90", now: "69,90" },
      msg: "Olá! Vim pelo site da Precision Automotive e gostaria de um Teste de Bateria e Sistema de Carga.",
    },
  ],

  /* ---------------- PREÇOS (seção dedicada) — VALORES EDITÁVEIS ---------------- */
  pricing: [
    { name: "Diagnóstico Completo", old: "199,90", now: "129,90" },
    { name: "Avaliação Pré-Compra", old: "249,90", now: "159,90" },
    { name: "Codificação de Módulos", old: "299,90", now: "199,90" },
    { name: "Regeneração de DPF", old: "349,90", now: "249,90" },
    { name: "Teste de Bateria/Carga", old: "99,90", now: "69,90" },
  ],

  /* ---------------- MARCAS ---------------- */
  brands: [
    "Mercedes-Benz","BMW","Audi","Volkswagen","Toyota","Honda",
    "Hyundai","Kia","Jeep","Chevrolet","Ford","Nissan",
    "Renault","Peugeot","Citroën","CAOA Chery","Mitsubishi","Volvo",
  ],

  /* ---------------- DIFERENCIAIS ---------------- */
  differentials: [
    { icon:"data", title:"Diagnóstico baseado em dados", desc:"Análise de códigos, parâmetros e sistemas eletrônicos — sem achismo." },
    { icon:"tools", title:"Equipamentos profissionais", desc:"Utilização de equipamentos adequados para diagnóstico automotivo." },
    { icon:"chat", title:"Atendimento especializado", desc:"Explicação clara e objetiva do problema encontrado." },
    { icon:"chip", title:"Tecnologia", desc:"Ferramentas voltadas para veículos modernos e sistemas complexos." },
    { icon:"car", title:"Atendimento móvel", desc:"Possibilidade de atendimento conforme disponibilidade e região." },
    { icon:"shield", title:"Transparência", desc:"Emitimos Nota Fiscal. Você recebe uma explicação honesta do diagnóstico." },
  ],

  /* ---------------- COMO FUNCIONA ---------------- */
  steps: [
    { n:"01", title:"Entre em contato", desc:"Informe veículo, ano e o problema apresentado." },
    { n:"02", title:"Avaliação", desc:"Analisamos a necessidade do serviço para o seu caso." },
    { n:"03", title:"Diagnóstico", desc:"Realizamos os testes eletrônicos necessários." },
    { n:"04", title:"Resultado", desc:"Apresentamos o diagnóstico e orientamos os próximos passos." },
  ],

  /* ---------------- DEPOIMENTOS (SUBSTITUA PELOS REAIS) ---------------- */
  testimonials: [
    { stars:5, text:"Excelente atendimento e diagnóstico muito preciso. Descobriram a falha que ninguém achava.", name:"Cliente Precision", role:"Curitiba/PR" },
    { stars:5, text:"Profissionais e transparentes. Explicaram tudo com clareza antes de qualquer serviço.", name:"Cliente Precision", role:"Araucária/PR" },
    { stars:5, text:"Codificação feita com segurança e nota fiscal. Recomendo para veículos modernos.", name:"Cliente Precision", role:"Região Metropolitana" },
  ],
};

/* ============================================================================
   SVG ICONS (inline)
   ============================================================================ */
const ICONS = {
  scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><path d="M7 12h2l1.5 3L13 8l1.5 4H17"/></svg>',
  chip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/></svg>',
  code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 6l-2 12"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h18l-7 8v6l-4 2v-8z"/></svg>',
  battery:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="16" height="10" rx="2"/><path d="M22 11v4M8 10v2M8 14h4M11 10v2"/></svg>',
  data:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V10M9 19V5M14 19v-7M19 19V8"/></svg>',
  tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 7a3 3 0 00-4 4L3 18l3 3 7-7a3 3 0 004-4l-2 2-2-2 2-2z"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h13a2 2 0 012 2z"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l1.5-4.5A2 2 0 018.4 7h7.2a2 2 0 011.9 1.5L19 13M5 13h14v4H5zM5 17v2M19 17v2"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
};

/* ============================================================================
   WHATSAPP
   ============================================================================ */
function waLink(message) {
  const msg = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
}

/* ============================================================================
   RENDER
   ============================================================================ */
function renderServices() {
  const el = document.getElementById("servicesGrid");
  el.classList.add("stagger");
  el.innerHTML = CONFIG.services.map((s) => {
    const p = s.price;
    const priceBlock = p.now === "Consultar"
      ? `<span class="now consult">Consultar</span>`
      : `<span class="from">A partir de</span>${p.old ? `<span class="old">R$ ${p.old}</span>` : ""}<span class="now">R$ ${p.now}</span>`;
    return `
      <article class="card" data-testid="service-card-${s.key}">
        <div class="card-ico">${ICONS[s.icon] || ICONS.scan}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <div class="card-price">${priceBlock}</div>
        <a href="${waLink(s.msg)}" target="_blank" rel="noopener" class="btn btn-primary btn-block" data-testid="service-quote-${s.key}">
          Solicitar orçamento <i class="ico ico-wa"></i>
        </a>
      </article>`;
  }).join("");
}

function renderPricing() {
  const el = document.getElementById("pricingGrid");
  el.classList.add("stagger");
  el.innerHTML = CONFIG.pricing.map((p) => `
    <div class="price-card" data-testid="price-card">
      <span class="price-tag">POR APENAS</span>
      <div class="price-name">${p.name}</div>
      <div class="price-old">De R$ ${p.old}</div>
      <div class="price-now"><span>R$</span> ${p.now}</div>
    </div>`).join("");
}

function renderBrands() {
  const el = document.getElementById("brandsGrid");
  el.classList.add("stagger");
  el.innerHTML = CONFIG.brands.map((b) =>
    `<div class="brand-chip" data-testid="brand-chip">${b}</div>`).join("");
}

function renderDifferentials() {
  const el = document.getElementById("diffGrid");
  el.classList.add("stagger");
  el.innerHTML = CONFIG.differentials.map((d, i) => `
    <div class="diff" data-testid="diff-card">
      <span class="diff-num">0${i + 1}</span>
      <div class="diff-ico">${ICONS[d.icon] || ICONS.data}</div>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
    </div>`).join("");
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  el.classList.add("stagger");
  el.innerHTML = CONFIG.steps.map((s) => `
    <div class="step" data-testid="step">
      <div class="step-num">${s.n}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join("");
}

function renderTestimonials() {
  const el = document.getElementById("testiGrid");
  el.classList.add("stagger");
  el.innerHTML = CONFIG.testimonials.map((t) => `
    <div class="testi" data-testid="testimonial">
      <div class="stars">${"★".repeat(t.stars)}</div>
      <p>"${t.text}"</p>
      <div class="testi-name">
        <div class="testi-avatar">${t.name.charAt(0)}</div>
        <div><strong>${t.name}</strong><span>${t.role}</span></div>
      </div>
    </div>`).join("");
}

/* ============================================================================
   WIRE WHATSAPP LINKS + INSTAGRAM
   ============================================================================ */
function wireLinks() {
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.setAttribute("href", waLink(a.getAttribute("data-wa-msg")));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
  const insta = document.getElementById("footInsta");
  if (insta) insta.setAttribute("href", CONFIG.instagram);
}

/* ============================================================================
   FORM -> WHATSAPP
   ============================================================================ */
function wireForm() {
  const form = document.getElementById("quoteForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(form);
    const nome = (f.get("nome") || "").toString().trim();
    const wa = (f.get("whatsapp") || "").toString().trim();
    let ok = true;
    [["nome", nome], ["whatsapp", wa]].forEach(([k, v]) => {
      const input = form.querySelector(`[name="${k}"]`);
      if (!v) { input.classList.add("invalid"); ok = false; }
      else input.classList.remove("invalid");
    });
    if (!ok) { form.querySelector(".invalid").focus(); return; }

    const msg =
`*Novo orçamento — site Precision Automotive*
Nome: ${nome}
WhatsApp: ${wa}
Marca: ${f.get("marca") || "-"}
Modelo: ${f.get("modelo") || "-"}
Ano: ${f.get("ano") || "-"}
Serviço: ${f.get("servico") || "-"}
Problema: ${f.get("descricao") || "-"}`;

    window.open(waLink(msg), "_blank", "noopener");
  });
}

/* ============================================================================
   HEADER / MENU / PROGRESS
   ============================================================================ */
function wireHeader() {
  const header = document.getElementById("header");
  const progress = document.getElementById("scrollProgress");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("solid", y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const ham = document.getElementById("hamburger");
  const menu = document.getElementById("mobileMenu");
  const toggle = (open) => {
    ham.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  ham.addEventListener("click", () => toggle(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));
}

/* ============================================================================
   ACTIVE NAV
   ============================================================================ */
function wireActiveNav() {
  const links = [...document.querySelectorAll(".nav-link")];
  const map = links.map((l) => ({ l, sec: document.querySelector(l.getAttribute("href")) })).filter((x) => x.sec);
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        const m = map.find((x) => x.sec === en.target);
        if (m) m.l.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((x) => obs.observe(x.sec));
}

/* ============================================================================
   REVEAL ON SCROLL
   ============================================================================ */
function wireReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in-view"); obs.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal, .stagger").forEach((el) => obs.observe(el));
}

/* ============================================================================
   SMOOTH SCROLL (Lenis) + ANCHORS
   ============================================================================ */
let lenis = null;
function wireSmoothScroll() {
  if (window.Lenis && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      if (lenis) lenis.scrollTo(top);
      else window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ============================================================================
   HERO PANEL ANIMATIONS (wave + metrics)
   ============================================================================ */
function wirePanel() {
  const line = document.getElementById("waveLine");
  if (line) {
    let t = 0;
    const draw = () => {
      const pts = [];
      for (let x = 0; x <= 300; x += 6) {
        const y = 35 + Math.sin((x + t) * 0.05) * 12 + Math.sin((x + t) * 0.13) * 6 * Math.random();
        pts.push(`${x},${y.toFixed(1)}`);
      }
      line.setAttribute("points", pts.join(" "));
      t += 6;
    };
    draw();
    setInterval(draw, 120);
  }

  const jitter = (el, base, dec, unit) => {
    const v = base + (Math.random() * 2 - 1) * dec;
    el.innerHTML = v.toFixed(dec ? 1 : 0) + (unit ? `<small>${unit}</small>` : "");
  };
  const metrics = {
    volt: document.querySelector('[data-metric="volt"]'),
    rpm: document.querySelector('[data-metric="rpm"]'),
    temp: document.querySelector('[data-metric="temp"]'),
  };
  setInterval(() => {
    if (metrics.volt) jitter(metrics.volt, 13.8, 1, "V");
    if (metrics.rpm) metrics.rpm.textContent = Math.round(820 + Math.random() * 60);
    if (metrics.temp) jitter(metrics.temp, 89, 0, "°C");
  }, 1400);
}

/* ============================================================================
   INIT
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderPricing();
  renderBrands();
  renderDifferentials();
  renderTimeline();
  renderTestimonials();
  wireLinks();
  wireForm();
  wireHeader();
  wireActiveNav();
  wireReveal();
  wireSmoothScroll();
  wirePanel();
  requestAnimationFrame(() => document.body.classList.add("loaded"));
});
