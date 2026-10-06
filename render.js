import { projects, services, about, career, contact } from "./data/content.js";
import {
  header,
  footer,
  projectCard,
  mediaItem,
  esc,
  arrow,
  label,
  link,
  lightbox,
} from "./components.js";
import { unkCase, unkFeature } from "./unk.js";

export const routes = [
  "/",
  "/works/",
  "/contact/",
  "/works/unk-imoveis/",
  ...projects.map((p) => `/works/${p.slug}/`),
];
export function normalizePath(path) {
  try {
    path = decodeURIComponent(path);
  } catch {
    return "/404/";
  }
  return path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
}
export function metadata(path) {
  path = normalizePath(path);
  const project = projects.find((p) => `/works/${p.slug}/` === path);
  if (path === "/works/unk-imoveis/")
    return {
      title: "UNK Imóveis — Construindo uma marca do zero | Pâmela Sav",
      description:
        "Um case completo de branding, direção criativa, marketing digital, social media e audiovisual. Da concepção da UNK Imóveis à sua presença no mercado.",
    };
  if (project)
    return {
      title: `${project.name} | Pâmela Sav`,
      description: project.summary,
    };
  if (path === "/works/")
    return {
      title: "Projetos | Pâmela Sav",
      description:
        "Projetos de direção de arte, identidade visual, social media, modelagem 3D e audiovisual por Pâmela Sav.",
    };
  if (path === "/contact/")
    return {
      title: "Contato | Pâmela Sav",
      description:
        "Vamos transformar sua ideia em uma experiência visual com propósito. Entre em contato com Pâmela Sav.",
    };
  return {
    title: "Pâmela Sav — Designer, video maker e social media",
    description:
      "Estratégia, identidade e experiências visuais que conectam marcas e pessoas. Conheça o portfólio de Pâmela Sav.",
  };
}

function home() {
  const featured = [
    "uniao-do-lago",
    "nabeauty-to",
    "thepixellife",
    "estanciaimperial",
  ].map((s) => projects.find((p) => p.slug === s));
  return `<section class="home-hero wrap"><div class="home-hero-center"><h1>PÂMELA SAV</h1><p>DESIGNER, VIDEO MAKER E SOCIAL MEDIA</p></div><div class="hero-bottom"><span>IDEIAS COM PROPÓSITO.<br> DESIGN COM PERSONALIDADE.</span><a href="#destaques">Explore meu trabalho <span aria-hidden="true">↓</span></a></div></section>
    ${unkFeature()}
    <section id="destaques" class="wrap section-space"><div class="section-heading reveal"><h2>Destaques</h2>${link("/works/", "Mais projetos")}</div><div class="project-grid">${featured.map(projectCard).join("")}</div></section>
    <section class="wrap section-space services-section"><div class="section-heading reveal"><h2>Serviços</h2><p class="eyebrow">DA ESTRATÉGIA À EXPRESSÃO</p></div><div class="services-grid">${services.map((s, i) => `<article class="service reveal"><div class="service-image"><img src="${s.image}" width="600" height="450" loading="lazy" decoding="async" alt="Exemplo de ${esc(s.name.toLowerCase())}"></div><div class="service-title"><h3>${esc(s.name)}</h3><span>0${i + 1}</span></div><p>${esc(s.description)}</p></article>`).join("")}</div></section>
    <section id="sobre" class="wrap section-space about-section"><div class="about-title reveal"><h2>Sobre<br> mim</h2><p>OLHAR CRIATIVO.<br> CONEXÕES REAIS.</p><img class="about-portrait" src="${contact.portrait}" alt="Retrato de Pâmela Sav" width="693" height="676" loading="lazy" decoding="async"></div><div class="about-content">${about.map(([t, p]) => `<div class="about-row reveal"><h3>${t}</h3><p>${p}</p></div>`).join("")}<div class="about-row reveal"><h3>Carreira</h3><ol class="career">${career.map(([date, text]) => `<li><span>${date}</span><p>${text}</p></li>`).join("")}</ol></div>${link("/contact/", "Mais sobre / Contato")}</div></section>`;
}

function works() {
  return `<section class="wrap page-intro"><p class="eyebrow">PORTFÓLIO / SELEÇÃO DE TRABALHOS</p><h1>Projetos<span class="title-count">(08)</span></h1></section>${unkFeature()}<section class="wrap works-section"><div class="filter-bar" role="group" aria-label="Filtrar projetos por serviço">${["Todos", ...services.map((s) => s.name)].map((name, i) => `<button data-project-filter="${esc(name)}" aria-pressed="${i === 0}">${esc(name)}</button>`).join("")}</div><p class="filter-count" data-project-status aria-live="polite">7 projetos na seleção · UNK Imóveis em destaque acima</p><div class="project-grid all-projects">${projects.map(projectCard).join("")}</div></section>`;
}

function projectPage(project) {
  return `<section class="wrap project-hero"><a class="eyebrow" href="/works/">← TODOS OS PROJETOS</a><h1>${esc(project.name)}</h1><p>${esc(project.summary)}</p></section><div class="wrap"><img class="project-cover" src="${project.cover}" width="1400" height="780" alt="Identidade de ${esc(project.name)}" fetchpriority="high"></div><section class="wrap project-info"><dl><div><dt>Serviços</dt><dd>${project.services.map(esc).join("<br> ")}</dd></div><div><dt>Cliente</dt><dd>${esc(project.name)}</dd></div><div><dt>Localização</dt><dd>Brasil</dd></div><div><dt>Ano</dt><dd>${esc(project.year)}</dd></div>${project.credits ? `<div><dt>Créditos</dt><dd>${esc(project.credits === "Images generated with AI" ? "Imagens geradas com IA" : project.credits)}</dd></div>` : ""}</dl><div class="project-description reveal"><p class="eyebrow">SOBRE O PROJETO</p><p>${esc(project.description)}</p></div></section><section class="wrap project-media" aria-label="Trabalhos de ${esc(project.name)}">${project.media.map((m, i) => mediaItem(m, project.name, i)).join("")}</section><section class="wrap section-space"><div class="section-heading"><h2>Próximos projetos</h2>${link("/works/", "Ver todos")}</div><div class="project-grid related-projects">${projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3)
    .map(projectCard)
    .join("")}</div></section>`;
}

function contactPage() {
  return `<section class="wrap contact-page"><div class="contact-content"><p class="eyebrow">VAMOS CRIAR ALGO JUNTOS</p><h1>Contato<span class="contact-star" aria-hidden="true">↗</span></h1><p class="contact-intro">Seu sonho merece sair do papel. Me conte sua ideia e vamos transformá-la em uma experiência única cheia de significado.</p><div class="contact-details"><div><h2>E-mail & telefone</h2><a href="mailto:${contact.email}">${contact.email} ${arrow}</a><a href="tel:${contact.tel}">${contact.phone} ${arrow}</a></div><div><h2>Redes sociais</h2><a href="${contact.instagram}" target="_blank" rel="noopener">Instagram ${arrow}</a><a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn ${arrow}</a></div></div>${link(`https://wa.me/${contact.tel.replace("+", "")}`, "Conversar pelo WhatsApp", "contact-whatsapp")}</div><figure class="contact-portrait"><img src="${contact.photo}" alt="Pâmela observando obras em uma exposição de arte" width="720" height="900" fetchpriority="high"><figcaption>O olhar é onde tudo começa.</figcaption></figure></section>`;
}

export function render(path) {
  path = normalizePath(path);
  const project = projects.find((p) => `/works/${p.slug}/` === path);
  const page =
    path === "/"
      ? home()
      : path === "/works/"
        ? works()
        : path === "/contact/"
          ? contactPage()
          : path === "/works/unk-imoveis/"
            ? unkCase()
            : project
              ? projectPage(project)
              : `<section class="wrap page-intro not-found"><p class="eyebrow">404 / PÁGINA NÃO ENCONTRADA</p><h1>Vamos voltar<br> aos projetos?</h1>${link("/works/", "Explorar portfólio")}</section>`;
  return `${header(path)}<main id="conteudo" tabindex="-1">${page}</main>${footer()}${lightbox()}`;
}
