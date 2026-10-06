# Publicar o portfólio com GitHub Pages

O projeto já inclui o arquivo `.github/workflows/deploy.yml`. Ele instala as dependências, verifica os arquivos, gera o site e publica a pasta `dist`. Os links são ajustados automaticamente para o endereço informado pelo GitHub Pages.

## 1. Criar o repositório

Entre na sua conta e abra https://github.com/new.

- Nome sugerido: `portfolio`.
- Visibilidade: **Public**, para usar o GitHub Pages no plano gratuito. O código e as imagens enviados ficam públicos.
- Não adicione README, licença ou `.gitignore` nessa tela: os arquivos necessários já estão no projeto.
- Clique em **Create repository**.

## 2. Enviar os arquivos pelo navegador

Extraia `portfolio-github.zip` no seu computador. Na página do repositório vazio, clique em **uploading an existing file**. Em um repositório que já tenha arquivos, use **Add file → Upload files**.

Arraste o conteúdo extraído para a página. Envie os arquivos e pastas internos, não o ZIP nem uma pasta externa que os contenha. Na raiz do repositório deverão aparecer:

```text
.github/
public/
scripts/
src/
.gitignore
index.html
package.json
package-lock.json
vite.config.js
README.md
PUBLICAR-NO-GITHUB.md
```

Confirme que `.github/workflows/deploy.yml` foi incluído. Não envie `node_modules`, a pasta `.git`, a pasta `reference` ou o ZIP. O pacote preparado já exclui esses arquivos.

Escreva uma mensagem como “Publicar meu portfólio” e clique em **Commit changes** para enviar à branch `main` (o workflow também aceita `master`).

## 3. Ativar o GitHub Pages

No repositório, abra **Settings → Pages**. Em **Build and deployment → Source**, selecione **GitHub Actions**.

## 4. Iniciar a publicação

Abra a aba **Actions**, escolha **Publicar portfólio** e clique em **Run workflow**, selecionando `main` (ou a branch em que enviou os arquivos). Confirme em **Run workflow**.

O primeiro envio pode ter iniciado uma execução antes de o Pages estar configurado. Se ela falhou, a execução manual após o passo 3 resolve essa sequência de configuração.

Espere a execução ficar verde. O endereço será exibido na execução e também em **Settings → Pages**. Para um repositório chamado `portfolio`, o formato usual é `https://SEU-USUARIO.github.io/portfolio/`.

## Atualizações posteriores

Alterações enviadas à branch `main` ou `master` iniciam uma nova publicação automaticamente. Se já usar Git ou GitHub Desktop, pode enviar o mesmo projeto por essas ferramentas em vez do upload pelo navegador.

O arquivo `portfolio-publicacao.zip` é uma alternativa com o site já gerado para hospedagens estáticas na raiz de um domínio. Para seguir este fluxo com GitHub Actions, use **portfolio-github.zip**, que contém o código e a configuração de publicação.

Os vídeos antigos continuam dependendo dos endereços públicos do Framer. Preserve essa hospedagem até transferir os vídeos para arquivos locais ou outra hospedagem.

Referências oficiais: [GitHub Pages com workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [envio de arquivos](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository) e [Vite no GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages).
