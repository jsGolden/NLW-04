# 🚀 NEXT LEVEL WEEK #4
## Rumo ao próximo nível!

O NLW é um evento online feita pela [@Rocketseat](https://github.com/Rocketseat) com muito código, desafios, networking e um único objetivo: te levar para o próximo nível.

Sempre com um conteúdo novo a cada edição, você vai descobrir na prática uma metodologia eficiente para o seu aprendizado, além de conceitos, ferramentas e hacks que vão impulsionar sua carreira.

**Ocorrido durante os dias 22/02/2021 - 28/02/2021!**

---

# 💪 Move it - O Pomodoro em forma de jogo!

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando">Clonar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="Move-it"src=".github/thumb.svg" width="100%" height="auto">
</p>


## 📌 Projeto
<br>
    A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos de 5 minutos.
    Move-it implementa exercicios aleatórios que dão pontos que fazem você upar! Quanto mais exercícios, mais pontos, não é maneiro?!
<br>

## 👩‍💻 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Axios](https://github.com/axios/axios)
- [MongoDB](https://www.mongodb.com/3)

## 🔖 Layout
Você pode visualizar o layout do projeto [clicando aqui!](https://www.figma.com/file/dgwUVyZexex1KKMG6ePSYn/Move.it-2.0-(Copy)?node-id=156638%3A199) 

## 📥 Clonando
Para clonar para seu repositório local use o seguinte comando no seu terminal de preferência:

```shell
    git clone https://github.com/jsGolden/NLW-04    # Clonar repositório
    cd NLW-04                                       # Entrar no repositório clonado
    cd moveit-next                                  # Entrar na pasta move-it
    yarn                                            # Instalar dependências
    yarn dev                                        # Iniciar servidor next
```

## 🕹 Demonstração
Você pode acessar este repositório rodando em um servidor da Vercel!
[Basta clicar aqui!](https://moveit-codeit.vercel.app/)

---
---

# 📈 Net Promoter Score - A avaliação empresarial via e-mail!

<p align="center">
  <a href="#-projeto-1">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-1">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-1">Clonar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença-1">Licença</a>
</p>

<p align="center">
  <img alt="NPS"src=".github/nps.png" width="100%" height="auto">
</p>


## 📌 Projeto
<br>
    Este projeto é uma API com o objetivo de enviar email com pesquisas criadas previamente!
    Net Promoter Score é uma métrica que tem como objetivo medir a satisfação e lealdade dos clientes com as empresas. Organizações de todos os portes e lugares do mundo utilizam o NPS por ser um método prático e eficaz durante as pesquisas periódicas realizadas com seus clientes.
<br>

## 👩‍💻 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [SQLite](https://www.sqlite.org/index.html)
- [Handlebars](https://handlebarsjs.com/)
- [Typeorm](https://typeorm.io/)
- [Nodemailer](https://nodemailer.com/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Typescript](https://www.typescriptlang.org/)

## 🗺 Rotas
```js
    //POST
    base_url/users              // Cria um novo usuario
    base_url/surveys            // Cria uma nova pesquisa
    base_url/sendMail           // Envia um email de pesquisa para o usuário

    //GET
    base_url/surveys            // Lista todas pesquisas
    base_url/answers/:value     // Lista todas respostas de uma pesquisa
    base_url/nps/:survey_id     // Responde uma determinada pesquisa
```

## 📥 Clonando
Para clonar para seu repositório local use o seguinte comando no seu terminal de preferência:

```shell
    git clone https://github.com/jsGolden/NLW-04    # Clonar repositório
    cd NLW-04                                       # Entrar no repositório clonado
    cd net-promoter-score                           # Entrar na pasta net-promoter-score
    yarn                                            # Instalar dependências
    yarn typeorm migration:run                      # Rodar migrations/criar database
    yarn dev                                        # Iniciar servidor next
```


## 📝 Licença
Esse repositório está sob a licença [MIT](LICENSE).

---