# Pâmela Sav — Portfólio

Recriação independente do portfólio publicado no Framer, com os sete projetos existentes e o novo case **UNK Imóveis — Construindo uma marca imobiliária do zero**.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para verificar e gerar os arquivos publicáveis:

```sh
npm run check
npm run build
npm run preview
```

O build gera páginas HTML pré-renderizadas em `dist/`. O conteúdo e a navegação permanecem disponíveis sem JavaScript; filtros, menu móvel, animações e expansão de imagens usam JavaScript. Não há backend nem formulário que envie dados.

## Estrutura

- `src/render.js`: páginas, rotas e metadados.
- `src/components.js`: cabeçalho, rodapé, cards e mídias compartilhados.
- `src/unk.js`: narrativa e composições do case UNK.
- `src/data/content.js`: conteúdo original, contato e serviços.
- `src/data/reference.json`: conteúdo e referências de mídia importados do site público.
- `src/styles.css`: identidade geral, estilos isolados da UNK e quatro faixas responsivas.
- `src/main.js`: comportamentos acessíveis, filtros e animações.
- `public/assets/`: imagens originais e fontes locais.
- `scripts/import_reference.py`: importação opcional da referência pública. Não execute para editar a UNK; pode sobrescrever os dados importados.

## Identidade original da UNK

As duas versões da logo fornecidas por Pâmela são utilizadas sem alteração:

- `public/assets/unk/logo-unk-clara.png`: bege e laranja, sobre fundos azul-marinho no destaque e na abertura do case.
- `public/assets/unk/logo-unk-marinho.png`: azul-marinho e laranja, sobre o fundo bege na seção de identidade visual.

A seção “A marca em suas aplicações”, seus placeholders e filtros foram removidos a pedido de Pâmela. A navegação e a numeração do case foram atualizadas.

Os dados disponíveis são exclusivamente **50,3 mil visualizações**, **26,6 mil contas alcançadas** e **+99 seguidores**, sempre contextualizados como indicadores do período analisado. As datas não foram fornecidas; atualize a observação em `src/unk.js` quando houver confirmação.

## Publicar

Para publicar no GitHub Pages, siga [PUBLICAR-NO-GITHUB.md](PUBLICAR-NO-GITHUB.md). O workflow incluído ajusta os caminhos automaticamente, tanto para a raiz do domínio quanto para uma subpasta como `/portfolio/`. Nenhuma conta ou repositório remoto foi conectado automaticamente.

O projeto é um site estático. Em uma hospedagem que aceite Vite/Node, configure:

- Comando de instalação: `npm ci`
- Comando de build: `npm run build`
- Diretório publicado: `dist`

Também é possível enviar todo o conteúdo de `dist/` a uma hospedagem estática com suporte a arquivos `index.html` em subpastas. Não é necessário encaminhar todas as rotas para a home; cada página possui seu próprio HTML. Mantenha `404.html` como página de erro. Domínio e conta de hospedagem são configurados no provedor escolhido. Nenhuma publicação foi realizada por este projeto.

As imagens e fontes são locais. Os vídeos dos cases anteriores continuam usando os endereços públicos originais do Framer, com carregamento somente sob demanda. Antes de desativar o site antigo, baixe os vídeos originais, coloque-os em `public/assets/` e substitua os endereços em `src/data/reference.json`. A disponibilidade dos vídeos ainda depende desses endereços externos.

## Decisões de preservação

- Fundo escuro, fonte Inter, títulos grandes, espaçamento amplo e revelações suaves.
- Os sete cases, seis serviços, apresentação e carreira foram preservados.
- Home e Projetos têm links únicos e corretos; o menu mobile tem rótulos reais.
- E-mail e telefone apontam para os dados que eram exibidos no site original.
- A paleta UNK fica restrita ao case e ao seu destaque.
- Nenhuma data, ferramenta, cliente, entrega visual ou métrica foi inventada para a UNK.
- Fontes locais, imagens lazy, vídeos sem autoplay e respeito a `prefers-reduced-motion`.
- Cabeçalho, filtros de projetos e lightbox operáveis por teclado.

## Verificações

`npm run check` valida rotas, links, âncoras, imagens locais, conteúdo preservado e as métricas autorizadas. A revisão visual deve incluir desktop, notebook, tablet e celular, além de filtros, menu, contato e expansão de imagens.
