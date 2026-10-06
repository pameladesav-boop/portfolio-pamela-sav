import { arrow, label, link } from "./components.js";

function unkLogo(variant, className, eager = false) {
  return `<img class="unk-logo ${className}" src="/assets/unk/logo-unk-${variant}.png" alt="Logo original da UNK Imóveis" width="1329" height="828" decoding="async" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
}

export function unkFeature() {
  return `<section class="unk-feature wrap reveal" aria-labelledby="unk-feature-title">
    <div class="section-heading"><p class="eyebrow"><span class="status-dot"></span> PROJETO EM FOCO</p><span class="eyebrow">BRANDING → PRESENÇA DIGITAL</span></div>
    <a href="/works/unk-imoveis/" class="unk-feature-panel">
      <div class="feature-top"><span>CASE COMPLETO</span><span>ESTRATÉGIA, DESIGN E GESTÃO</span></div>
      <div class="feature-center"><div class="feature-logo">${unkLogo("clara", "unk-feature-logo")}<span>UNK IMÓVEIS</span></div><div class="feature-description"><h2 id="unk-feature-title">Construindo uma<br> marca imobiliária<br> do zero.</h2><p>Da primeira ideia a um sistema<br> de comunicação em movimento.</p></div></div>
      <div class="feature-bottom"><span>Branding · Direção criativa · Marketing digital</span><span class="feature-action">Conheça o projeto <span class="round-arrow">${arrow}</span></span></div>
      <div class="architectural-lines" aria-hidden="true"></div>
    </a>
  </section>`;
}

export function unkCase() {
  const roles = [
    [
      "Direção de marca",
      "Idealização, direção, estruturação, design e implantação. Do conceito e posicionamento à identidade visual, ao brandbook e às aplicações.",
    ],
    [
      "Estratégia de comunicação",
      "Tom de voz, pilares de conteúdo e estratégia editorial. Uma comunicação sofisticada, educativa e próxima, conectada aos objetivos comerciais.",
    ],
    [
      "Social media e gestão",
      "Planejamento de redes sociais, calendários editoriais, campanhas, copies, legendas e CTAs. Conteúdos com direcionamento para atendimento via WhatsApp.",
    ],
    [
      "Audiovisual e direção criativa",
      "Conceitos, roteiros, storytelling e direção de movimento, enquadramento e ritmo. Motion design e adaptação para formatos verticais.",
    ],
  ];
  const pillars = [
    [
      "01",
      "Marca",
      "Branding e identidade",
      "Dar consistência à presença da UNK e expressar seu posicionamento.",
    ],
    [
      "02",
      "Conexão",
      "Relacionamento",
      "Construir uma comunicação próxima, humana e aberta à interação.",
    ],
    [
      "03",
      "Confiança",
      "Autoridade e educação",
      "Orientar o público sobre decisões, processos e possibilidades do mercado imobiliário.",
    ],
    [
      "04",
      "Ação",
      "Conteúdo comercial",
      "Apresentar oportunidades e conectar o interesse ao atendimento.",
    ],
  ];
  const stages = [
    "Ideia",
    "Pesquisa",
    "Copy",
    "Aprovação",
    "Design",
    "Revisão",
    "Programação",
    "Publicação",
    "Interação",
    "Análise",
  ];
  return `<article class="unk-case">
    <section class="unk-hero" aria-labelledby="unk-title"><div class="wrap">
      <div class="case-breadcrumb"><a href="/works/">← Todos os projetos</a><span>ESTUDO DE CASO / UNK IMÓVEIS</span></div>
      <div class="unk-hero-grid"><div><p class="eyebrow orange">DA CONCEPÇÃO À PRESENÇA DIGITAL</p><h1 id="unk-title">UNK Imóveis<span>Construindo uma<br> marca imobiliária<br> <em>do zero.</em></span></h1></div><div class="hero-side">${unkLogo("clara", "unk-hero-logo", true)}<p>Uma marca.<br> Muitas conexões.<br> Um sistema completo.</p><a class="case-scroll" href="#contexto">Explore a história <span aria-hidden="true">↓</span></a></div></div>
      <div class="unk-hero-bottom"><p>Branding <b>·</b> Direção Criativa <b>·</b> Marketing Digital <b>·</b> Social Media <b>·</b> Audiovisual</p><span>PÂMELA SAV / DIREÇÃO E CONSTRUÇÃO</span></div>
    </div><div class="hero-line" aria-hidden="true"></div></section>

    <nav class="case-nav" aria-label="Capítulos do case"><div class="wrap"><a href="#contexto">01 / Contexto</a><a href="#marca">02 / Marca</a><a href="#estrategia">03 / Comunicação</a><a href="#processo">04 / Processo</a><a href="#resultados">05 / Resultados</a></div></nav>

    <section id="contexto" class="case-section cream"><div class="wrap editorial-grid reveal">${label("01", "O PONTO DE PARTIDA")}<div><h2>Um novo olhar<br> para o mercado<br> <span class="muted-ink">imobiliário.</span></h2><div class="two-copy"><p>A UNK Imóveis foi desenvolvida como uma marca contemporânea, sofisticada e humana, buscando fugir da comunicação genérica e excessivamente comercial do setor.</p><p>Meu trabalho conectou a construção da marca à sua aplicação no mercado: um ecossistema de comunicação digital pensado para informar, criar relações e aproximar pessoas de suas decisões.</p></div></div></div></section>

    <section class="case-section cream role-section"><div class="wrap"><div class="section-heading reveal"><div>${label("02", "MEU PAPEL")}<h2>Da visão<br> à implantação.</h2></div><p class="section-aside">Uma atuação integrada.<br> Responsabilidade em cada ponto<br> de contato da marca.</p></div><div class="role-grid">${roles.map(([title, text], i) => `<div class="role-card reveal"><span class="role-number">0${i + 1}</span><h3>${title}</h3><p>${text}</p></div>`).join("")}</div></div></section>

    <section id="marca" class="case-section navy"><div class="wrap"><div class="editorial-grid reveal">${label("03", "CONSTRUÇÃO DA MARCA")}<div><h2>Antes da imagem,<br> <span class="orange">uma intenção.</span></h2><p class="large-copy">Construir uma marca é definir como ela se apresenta, como se comunica e como se mantém consistente.</p></div></div><div class="brand-sequence reveal"><div><span>01 — ESSÊNCIA</span><h3>Conceito &<br> posicionamento</h3><p>A direção que orienta as escolhas e a personalidade da UNK.</p></div><div><span>02 — EXPRESSÃO</span><h3>Identidade &<br> brandbook</h3><p>Um sistema visual organizado em padrões e diretrizes para a marca.</p></div><div><span>03 — CONSISTÊNCIA</span><h3>Aplicação &<br> implantação</h3><p>Identidade presente em materiais institucionais, comerciais e digitais.</p></div></div></div></section>

    <section class="case-section cream identity-section"><div class="wrap"><div class="section-heading reveal"><div>${label("04", "IDENTIDADE VISUAL")}<h2>Presença na medida.<br> Personalidade em cada detalhe.</h2></div><p class="section-aside">Geometria, respiro e contraste.<br> Uma linguagem elegante,<br> minimalista e editorial.</p></div><div class="identity-logo-stage reveal">${unkLogo("marinho", "unk-identity-logo")}</div><div class="palette reveal"><div class="swatch navy-swatch"><span>01 / BASE</span><strong>Azul-marinho</strong><span>#011B36</span></div><div class="swatch orange-swatch"><span>02 / CONTRASTE</span><strong>Laranja</strong><span>#EF6921</span></div><div class="swatch beige-swatch"><span>03 / EQUILÍBRIO</span><strong>Bege</strong><span>#E8DFD3</span></div></div><div class="identity-note"><p>Linhas geométricas finas e composições com espaço para respirar conectam as aplicações da identidade.</p></div></div></section>

    <section id="estrategia" class="case-section cream editorial-section"><div class="wrap"><div class="editorial-grid reveal">${label("05", "ESTRATÉGIA EDITORIAL")}<div><h2>Uma conversa.<br> <span class="muted-ink">Muito além do catálogo.</span></h2><p class="large-copy">Sofisticada sem ser distante. Educativa sem ser complicada. Comercial sem perder a proximidade.</p><p class="body-copy">O tom de voz e os pilares editoriais conectam branding, relacionamento, autoridade, educação imobiliária e conversão em uma presença coerente.</p></div></div><div class="pillars">${pillars.map(([n, title, subtitle, text]) => `<div class="pillar reveal"><span>${n}</span><h3>${title}</h3><h4>${subtitle}</h4><p>${text}</p></div>`).join("")}</div></div></section>

    <section class="case-section navy social-section"><div class="wrap social-grid"><div class="reveal">${label("06", "SOCIAL MEDIA")}<h2>Presença não<br> acontece<br> <span class="orange">por acaso.</span></h2><p class="large-copy">Planejamento, criação e gestão conectados à rotina e aos objetivos comerciais da marca.</p></div><div class="social-list reveal"><div><span>01</span><h3>Planejar</h3><p>Gestão das redes, calendários editoriais e planejamento de campanhas. Conteúdos comerciais e educativos com uma direção comum.</p></div><div><span>02</span><h3>Criar</h3><p>Criação e direção de Feed, Stories, Reels e carrosséis. Copies, legendas, CTAs e conteúdos interativos para cada formato.</p></div><div><span>03</span><h3>Conectar</h3><p>Integração do conteúdo aos objetivos comerciais, com direcionamento para o atendimento via WhatsApp.</p></div></div></div></section>

    <section class="case-section cream"><div class="wrap"><div class="section-heading reveal"><div>${label("07", "CONTEÚDO E CAMPANHAS")}<h2>Informar também<br> é aproximar.</h2></div><p class="section-aside">Uma estratégia que acompanha<br> as dúvidas, os interesses e<br> as decisões do público.</p></div><div class="content-map reveal"><div class="content-map-intro"><span aria-hidden="true">↗</span><p>Do primeiro interesse<br> à decisão de compra.</p><small>UNIVERSO EDITORIAL</small></div><div class="topic-cloud">${["Primeiro imóvel", "Financiamento", "Documentação", "FGTS", "Custos da compra", "Investimentos", "Mercado imobiliário", "Empreendimentos", "Conteúdos comerciais", "Conteúdos sobre a MRV", "Orientação ao público"].map((t) => `<span>${t}</span>`).join("")}</div></div></div></section>

    <section class="case-section cream audiovisual-section"><div class="wrap"><div class="editorial-grid reveal">${label("08", "AUDIOVISUAL")}<div><h2>Uma marca que<br> também se expressa<br> <span class="muted-ink">em movimento.</span></h2><p class="large-copy">Conceito, roteiro e storytelling se encontram na direção de conteúdos audiovisuais.</p></div></div><div class="film-strip reveal"><div><span>01 / NARRATIVA</span><h3>Uma ideia<br> com direção.</h3><p>Conceitos e roteiros que dão sentido a cada vídeo e Reel.</p></div><div><span>02 / LINGUAGEM</span><h3>O olhar.<br> O ritmo.</h3><p>Direção de movimento, enquadramento e ritmo a serviço da história.</p></div><div><span>03 / FORMATO</span><h3>Feito para<br> cada tela.</h3><p>Motion design e adaptação dos conteúdos para formatos verticais.</p></div></div></div></section>

    <section id="processo" class="case-section navy"><div class="wrap"><div class="section-heading reveal"><div>${label("09", "SISTEMA DE PRODUÇÃO")}<h2>Criatividade com<br> <span class="orange">estrutura.</span></h2></div><p class="section-aside">Um fluxo que conecta a ideia<br> à publicação — e transforma<br> a análise em aprendizado.</p></div><ol class="production-flow reveal">${stages.map((s, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><h3>${s}</h3><b aria-hidden="true">${i === stages.length - 1 ? "↺" : "→"}</b></li>`).join("")}</ol><p class="process-caption">A análise alimenta o próximo ciclo. A consistência se constrói no processo.</p></div></section>


    <section id="resultados" class="case-section navy results-section"><div class="wrap"><div class="editorial-grid reveal">${label("10", "DA IDENTIDADE PARA O MERCADO")}<div><h2>Marca em<br> <span class="orange">movimento.</span></h2><p class="large-copy">Da construção da identidade à presença digital: indicadores da gestão do Instagram da UNK.</p></div></div><div class="metrics"><div class="metric reveal"><strong>50,3<span> mil</span></strong><p>Visualizações</p></div><div class="metric reveal"><strong>26,6<span> mil</span></strong><p>Contas alcançadas</p></div><div class="metric reveal"><strong>+99</strong><p>Seguidores</p></div></div><p class="results-note">Indicadores do período analisado da operação digital da UNK. Não representam resultados permanentes ou promessa de crescimento. As datas do período não foram informadas.</p></div></section>

    <section class="case-section cream case-closing"><div class="wrap reveal">${label("11", "O QUE CONECTA TUDO")}<p class="closing-equation">Estratégia <span>+</span> Branding <span>+</span> Design <span>+</span> Conteúdo <span>+</span> Audiovisual <span>+</span> Gestão <span>+</span> Dados</p><blockquote>“Mais do que desenvolver uma identidade, construí um sistema de marca capaz de se comunicar, produzir conteúdo e ocupar seu espaço no mercado.”</blockquote><div class="closing-signature"><span>PÂMELA SAV<br> <small>Direção, construção e implantação da UNK Imóveis</small></span>${link("/contact/", "Vamos construir sua próxima ideia?")}</div></div></section>
    <div class="case-end wrap">${link("/works/", "Explorar outros projetos")}<a href="#top">Voltar ao início do case ↑</a></div>
  </article>`;
}
