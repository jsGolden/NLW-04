
# 📈 Net Promoter Score - A avaliação empresarial via e-mail!

<p align="center">
  <a href="#-projeto-1">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias-1">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonando-1">Clonar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença-1">Licença</a>
</p>

<p align="center">
  <img alt="NPS"src="../.github/nps.png" width="100%" height="auto">
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