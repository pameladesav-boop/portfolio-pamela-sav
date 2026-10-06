import reference from "./reference.json" with { type: "json" };

export const contact = {
  email: "pameladesav@gmail.com",
  phone: "+55 63 9 9249-9794",
  tel: "+5563992499794",
  instagram: "https://www.instagram.com/pameladesav/",
  linkedin: "https://www.linkedin.com/in/p%C3%A2mela-sav/",
  drive:
    "https://drive.google.com/drive/folders/15UzJf_r03VTdUVFM8hTeyFu3TJ7K3nN6?usp=sharing",
  photo: reference.contact.media[0].src,
  portrait: reference.home.media[10].src,
};

const names = [
  "União do Lago",
  "Calcário Guaraí",
  "Nabeauty (Palmas)",
  "The Pixel Life",
  "Estância Imperial",
  "Agropet",
  "Julyana Dias Store",
];
const originalCovers = {
  "uniao-do-lago": reference.home.media[0].src,
  "calcário-guaraí": "/assets/5p7omOkLEb0cIIkVsMtdTi2YaBg.png",
  agropetbrand: "/assets/vVJDbN6s4FGGL32JCPSPvb9Tv4.png",
};
export const projects = Object.entries(reference)
  .filter(([slug]) => !["home", "contact"].includes(slug))
  .map(([slug, data], index) => {
    const texts = data.content.map((x) => x.text.trim());
    const titleIndex = data.content.findIndex((x) => x.tag === "h1");
    const serviceStart = texts.indexOf("Services");
    const next = texts[titleIndex + 1];
    return {
      slug,
      name: names[index],
      summary:
        next === "Client"
          ? "Identidade visual, branding e materiais impressos."
          : next,
      services:
        serviceStart >= 0
          ? texts
              .slice(serviceStart + 1, texts.indexOf("Client"))
              .map((s) => (s === "Video making" ? "Video making" : s))
          : ["Identidade Visual", "Impressos"],
      year: texts[texts.indexOf("Year") + 1],
      description: texts[texts.indexOf("Info") + 1]
        .replace("dodesenvolvimento", "do desenvolvimento")
        .replace("natural.Além", "natural. Além"),
      credits: texts.includes("Credits")
        ? texts[texts.indexOf("Credits") + 1]
        : "",
      cover:
        originalCovers[slug] || data.media.find((m) => m.tag === "img").src,
      media: data.media,
    };
  });

export const services = [
  [
    "Direção de arte",
    "Criação de conceitos visuais e definição de identidade estética para projetos digitais e impressos.",
  ],
  [
    "Identidade Visual",
    "Desenvolvimento de logotipo, paleta de cores e elementos gráficos para posicionamento de marca.",
  ],
  [
    "Impressos",
    "Criação de materiais gráficos para impressão, como cartões, flyers, banners e papelaria.",
  ],
  [
    "Modelagem 3D",
    "Produção de objetos e cenários 3D para visualização, publicidade e projetos digitais.",
  ],
  [
    "Social Media",
    "Planejamento e criação de conteúdo e impulsionamento para redes sociais com focos diversos.",
  ],
  [
    "Video making",
    "Captação e edição de vídeos institucionais e promocionais para mídias digitais, incluindo motion e captação por drone.",
  ],
].map(([name, description], i) => ({
  name,
  description,
  image: reference.home.media[i + 4].src,
}));

export const about = [
  [
    "O que eu faço",
    "Ajudo marcas a encontrarem sua essência e transformo ideias em experiências visuais autênticas. Ofereço soluções completas em design, identidade visual, social media, modelagem 3D e video making, sempre com foco em criar conexões reais entre marca e público.",
  ],
  [
    "Sobre mim",
    "Trabalho com design desde 2018, quando iniciei minha jornada aos 15 anos. Ao longo desse tempo, desenvolvi projetos para diferentes segmentos, atuando desde a criação visual até estratégias de marketing e posicionamento. Meu trabalho vai além da estética: busco entender cada cliente, valorizando sua história e criando soluções únicas e personalizadas.",
  ],
  [
    "No que acredito",
    "Acredito que design é mais do que criar imagens bonitas, é dar vida a sonhos e transformar ideias em realidade. Meu processo é baseado na empatia, na escuta e na honestidade nos detalhes. Cada projeto é uma forma de expressão artística, construída para transmitir propósito, identidade e conexão.",
  ],
];
export const career = [
  ["2018 — 2020", "Freelancer em Design e Identidade Visual"],
  [
    "2021 — 2022",
    "Coordenadora de Arte e Design — Casa das Camisetas (Brasília)",
  ],
  ["2023 — 2024", "Desenvolvimento de Marcas e Projetos 3D — Eplace"],
  [
    "2024",
    "Participação em projetos e eventos (ex.: Imersão Mulher de Sucesso) — Design, Social Media e Copy",
  ],
  ["2025", "Social Media e Marketing — Loja do Jeans (Palmas)"],
  ["2025 — Atual", "Coordenadora de Marketing — União do Lago"],
];
