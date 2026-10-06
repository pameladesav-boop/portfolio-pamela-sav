import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { render, metadata, routes } from "../src/render.js";
import { esc } from "../src/components.js";
import { withSiteBase } from "../src/site-paths.js";

const template = await readFile("dist/index.html", "utf8");
for (const route of [...routes, "/404/"]) {
  const meta = metadata(route);
  const html = template
    .replace(
      '<div id="app"></div>',
      `<div id="app">${withSiteBase(render(route), process.env.SITE_BASE_PATH)}</div>`,
    )
    .replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(
      /(<meta name="description" content=")[^"]*/,
      `$1${esc(meta.description)}`,
    )
    .replace(
      /(<meta property="og:title" content=")[^"]*/,
      `$1${esc(meta.title)}`,
    )
    .replace(
      /(<meta property="og:description" content=")[^"]*/,
      `$1${esc(meta.description)}`,
    );
  const dir = join("dist", route);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), html);
  if (route === "/404/") await writeFile("dist/404.html", html);
}
console.log(
  `Pré-renderizadas: ${routes.length} páginas + página 404. Conteúdo disponível sem JavaScript.`,
);
