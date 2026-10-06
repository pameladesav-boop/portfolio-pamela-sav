import { contact } from "./data/content.js";

export const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const arrow = '<span class="arrow" aria-hidden="true">↗</span>';
export const label = (number, text) =>
  `<p class="eyebrow"><span>${esc(number)}</span> ${esc(text)}</p>`;
export const link = (href, text, extra = "") =>
  `<a class="text-link ${extra}" href="${esc(href)}">${esc(text)} ${arrow}</a>`;
export function header(path) {
  const links = [
    ["/", "Início"],
    ["/works/", "Projetos"],
    ["/contact/", "Contato"],
  ];
  return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="site-header"><a class="wordmark" href="/" aria-label="Pâmela Sav — início">PÂMELASAV</a>
    <nav class="desktop-nav" aria-label="Navegação principal">${links.map(([href, title]) => `<a href="${href}" ${path === href || (href === "/works/" && path.startsWith("/works/")) ? 'aria-current="page"' : ""}>${title}</a>`).join("")}</nav>
    <time class="header-date" datetime="2026-10-01">PORTFÓLIO CRIATIVO</time>
    <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu">Menu <span aria-hidden="true">+</span></button>
  </header>
  <nav id="mobile-menu" class="mobile-menu" aria-label="Navegação mobile" hidden>${links.map(([href, title], i) => `<a href="${href}"><small>0${i + 1}</small>${title}${arrow}</a>`).join("")}<p>Design que conecta.<br>Ideias que ganham vida.</p></nav>`;
}
export function footer() {
  return `<footer class="site-footer wrap"><div class="footer-top"><p class="eyebrow">TEM UMA IDEIA EM MENTE?</p>${link("/contact/", "Vamos conversar.", "footer-cta")}</div>
  <div class="footer-bottom"><a class="wordmark" href="/">PÂMELASAV</a><div>${link(contact.drive, "Drive")}${link(contact.instagram, "Instagram")}</div><span>© <span data-year>2026</span> Pâmela Sav</span><a href="#top" class="back-top" aria-label="Voltar ao topo">↑</a></div></footer>`;
}
export function projectCard(project, index = 0) {
  return `<article class="project-card reveal" data-categories="${esc(project.services.join("|"))}"><a href="/works/${esc(project.slug)}/" class="project-image"><img src="${esc(project.cover)}" loading="lazy" decoding="async" width="800" height="900" alt="${esc(project.name)} — projeto de ${esc(project.services.join(", "))}"><span class="project-open" aria-label="Ver projeto">${arrow}</span></a><div class="project-caption"><div><h3><a href="/works/${esc(project.slug)}/">${esc(project.name)}</a></h3><p>${esc(project.summary)}</p></div><span class="project-index">${String(index + 1).padStart(2, "0")}</span></div></article>`;
}
export function mediaItem(media, title, index = 0) {
  if (media.tag === "video" || media.type === "video")
    return `<figure class="media-video"><video controls playsinline preload="none" ${media.poster ? `poster="${esc(media.poster)}"` : ""} aria-label="${esc(title)} — vídeo ${index + 1}"><source src="${esc(media.src)}" type="video/mp4">${media.captions ? `<track kind="captions" src="${esc(media.captions)}" srclang="pt-BR" label="Português" default>` : ""}Seu navegador não suporta este vídeo.</video><figcaption>${esc(title)} · Audiovisual ${String(index + 1).padStart(2, "0")}<a href="${esc(media.src)}" target="_blank" rel="noopener">Abrir vídeo ↗</a></figcaption></figure>`;
  return `<figure class="media-image"><button class="image-expand" data-lightbox="${esc(media.src)}" data-caption="${esc(media.alt || title)}" aria-label="Ampliar: ${esc(media.alt || title)}"><img loading="lazy" decoding="async" src="${esc(media.src)}" alt="${esc(media.alt || title + " — aplicação visual " + (index + 1))}" ${media.width ? `width="${esc(media.width)}" height="${esc(media.height)}"` : ""}><span aria-hidden="true">Ampliar ↗</span></button></figure>`;
}
export const lightbox = () =>
  `<dialog class="lightbox" aria-label="Imagem ampliada"><button class="lightbox-close" aria-label="Fechar imagem">Fechar ×</button><img alt=""><p></p></dialog>`;
