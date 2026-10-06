import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { routes, render, metadata } from "../src/render.js";
import { projects, contact } from "../src/data/content.js";
import { routeFromPath, withSiteBase } from "../src/site-paths.js";

assert.equal(
  projects.length,
  7,
  "Os sete projetos originais precisam ser preservados.",
);
assert.equal(
  new Set(routes).size,
  11,
  "Rotas únicas para home, catálogo, contato e oito cases.",
);
for (const route of routes) {
  const html = render(route);
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `Um título principal em ${route}`,
  );
  assert(!html.includes("undefined"), `Conteúdo ausente em ${route}`);
  assert(
    !metadata(route).title.includes("JORGE"),
    "Remover metadados do template.",
  );
  for (const [, href] of html.matchAll(/href="(\/[^"]*)"/g)) {
    assert(
      routes.includes(decodeURIComponent(href)) || existsSync(`public${href}`),
      `Destino local inválido: ${href}`,
    );
  }
  for (const [, src] of html.matchAll(/(?:src|poster)="(\/assets\/[^\"]*)"/g)) {
    assert(existsSync(`public${src}`), `Mídia ausente: ${src}`);
  }
  for (const [, hash] of html.matchAll(/href="#([^\"]+)"/g)) {
    assert(
      hash === "top" || html.includes(`id="${hash}"`),
      `Âncora inválida: ${hash}`,
    );
  }
  const hosted = withSiteBase(html, "/portfolio");
  for (const [, url] of hosted.matchAll(
    /(?:href|src|data-lightbox)="(\/[^\"]*)"/g,
  )) {
    assert(
      url.startsWith("/portfolio/"),
      `Caminho incompatível com GitHub Pages: ${url}`,
    );
  }
  assert.equal(routeFromPath(`/portfolio${route}`, "/portfolio/"), route);
}
assert.equal(routeFromPath("/portfolio/", "/portfolio/"), "/");
assert.equal(
  routeFromPath("/portfolio-extra/", "/portfolio/"),
  "/portfolio-extra/",
);
assert.equal(
  withSiteBase('<a href="https://example.com/">Link</a>', "/portfolio/"),
  '<a href="https://example.com/">Link</a>',
);
const unk = render("/works/unk-imoveis/");
assert(
  unk.includes("50,3<span> mil") &&
    unk.includes("26,6<span> mil") &&
    unk.includes("+99"),
);
assert(unk.includes("As datas do período não foram informadas."));
assert(
  unk.includes(
    "Não representam resultados permanentes ou promessa de crescimento.",
  ),
);
const contactHtml = render("/contact/");
assert(contactHtml.includes(`mailto:${contact.email}`));
assert(contactHtml.includes(`tel:${contact.tel}`));
assert(
  !contactHtml.includes("hi@jorge.com") && !contactHtml.includes("tel:+52"),
);
assert.equal(render("/inexistente/").includes("404 /"), true);
assert.equal(
  render("/works/calc%C3%A1rio-guara%C3%AD").includes("Calcário Guaraí"),
  true,
);
console.log(
  "OK: 11 rotas, links e âncoras, mídias locais, 7 projetos preservados, contato e indicadores da UNK.",
);
