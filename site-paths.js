// GitHub Pages can serve the same site at / or at /repository-name/.
export function normalizeBase(value = "/") {
  const path = value.replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}

export function routeFromPath(path, base = "/") {
  base = normalizeBase(base);
  if (base === "/") return path;
  if (path === base.slice(0, -1)) return "/";
  return path.startsWith(base) ? `/${path.slice(base.length)}` : path;
}

export function withSiteBase(html, base = "/") {
  base = normalizeBase(base);
  if (base === "/") return html;
  return html.replace(
    /\b(href|src|poster|data-lightbox)="\/(?!\/)([^"]*)"/g,
    (_, attr, path) => `${attr}="${base}${path}"`,
  );
}
