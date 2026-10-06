import "./styles.css";
import { render, metadata } from "./render.js";
import { routeFromPath, withSiteBase } from "./site-paths.js";

const app = document.querySelector("#app");
const route = routeFromPath(location.pathname, import.meta.env.BASE_URL);
if (!app.hasChildNodes()) {
  app.innerHTML = withSiteBase(render(route), import.meta.env.BASE_URL);
}
const meta = metadata(route);
document.title = meta.title;
document.querySelector('meta[name="description"]').content = meta.description;

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#mobile-menu");
function closeMenu(returnFocus = false) {
  menu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.innerHTML = 'Menu <span aria-hidden="true">+</span>';
  document.body.classList.remove("menu-open");
  document.querySelector("main").inert = false;
  document.querySelector("footer").inert = false;
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.innerHTML = open
    ? 'Fechar <span aria-hidden="true">−</span>'
    : 'Menu <span aria-hidden="true">+</span>';
  document.body.classList.toggle("menu-open", open);
  document.querySelector("main").inert = open;
  document.querySelector("footer").inert = open;
  if (open) menu.querySelector("a").focus();
});
menu.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (menu.hidden) return;
  if (e.key === "Escape") closeMenu(true);
  if (e.key === "Tab") {
    const items = [menuButton, ...menu.querySelectorAll("a")];
    if (e.shiftKey && document.activeElement === items[0]) {
      e.preventDefault();
      items.at(-1).focus();
    }
    if (!e.shiftKey && document.activeElement === items.at(-1)) {
      e.preventDefault();
      items[0].focus();
    }
  }
});
matchMedia("(min-width:810px)").addEventListener("change", (e) => {
  if (e.matches) closeMenu();
});

document
  .querySelectorAll("[data-year]")
  .forEach((x) => (x.textContent = new Date().getFullYear()));
const date = document.querySelector(".header-date");
date.dateTime = new Date().toLocaleDateString("en-CA", {
  timeZone: "America/Sao_Paulo",
});
date.textContent = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "America/Sao_Paulo",
}).format(new Date());

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08, rootMargin: "0px 0px 25px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function filterControls(
  buttonSelector,
  itemSelector,
  key,
  statusSelector,
  unit,
) {
  const buttons = document.querySelectorAll(buttonSelector);
  const items = document.querySelectorAll(itemSelector);
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      const chosen = button.dataset[key];
      buttons.forEach((b) =>
        b.setAttribute("aria-pressed", String(b === button)),
      );
      let total = 0;
      items.forEach((item) => {
        const categories = item.dataset.categories.split("|");
        const shown =
          chosen === "Todos" ||
          categories.some(
            (x) =>
              x.toLocaleLowerCase("pt-BR") ===
              chosen.toLocaleLowerCase("pt-BR"),
          );
        item.hidden = !shown;
        if (shown) {
          total++;
          item.classList.add("is-visible");
        }
      });
      const status = document.querySelector(statusSelector);
      status.textContent = `${total} ${unit} na seleção${key === "projectFilter" ? " · UNK Imóveis em destaque acima" : ""}`;
    }),
  );
}
filterControls(
  "[data-project-filter]",
  "[data-categories]",
  "projectFilter",
  "[data-project-status]",
  "projetos",
);

const dialog = document.querySelector(".lightbox");
let imageTrigger;
document.querySelectorAll("[data-lightbox]").forEach((button) =>
  button.addEventListener("click", () => {
    imageTrigger = button;
    dialog.querySelector("img").src = button.dataset.lightbox;
    dialog.querySelector("img").alt = button.dataset.caption;
    dialog.querySelector("p").textContent = button.dataset.caption;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }),
);
dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const b = dialog.getBoundingClientRect();
    if (
      e.clientX < b.left ||
      e.clientX > b.right ||
      e.clientY < b.top ||
      e.clientY > b.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  imageTrigger?.focus();
});

// Pause offscreen media; videos load only when the visitor starts playback.
if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      if (!entry.isIntersecting) entry.target.pause();
    }),
  );
  document
    .querySelectorAll("video")
    .forEach((video) => videoObserver.observe(video));
}
