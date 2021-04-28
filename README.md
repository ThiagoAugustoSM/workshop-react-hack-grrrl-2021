# Workshop Hack Grrrl 2021 | React - GraphQL

[Link para a Gravação do Workshop](https://www.youtube.com/watch?v=IMJR6kMwAQ0)

[Link para os slides do Workshop](https://docs.google.com/presentation/d/1-0NCBAHRytcyvm_UjkaShNJyXagpFZumdpregOVnC3E/edit?usp=sharing)

## Como rodar o projeto

Dentro deste projeto temos 3 aplicações:

- __front-end__: A solução que criamos no workshop
- __workshop__: A solução base para o front-end, estava sendo utilizada como objetivo final. Ela conta com algumas features a mais do que feitas no workshop, como: deletar To-Do's.
- __graphql-server__: O servidor de GraphQL utilizado para servir os nossos dados para o front-end. Os dois projetos acima precisam que este servidor esteja rodando para que todas as features funcionem.

Para rodar qualquer um dos projetos:

1. Abra o terminal e entre na pasta do projeto
2. Dentro da pasta do projeto escolhido, rode ```npm install```. _(só é necessário rodar esse comando uma única vez, depois os pacotes já estarão instalados no seu diretório)_
3. Depois só é rodar ```npm run start``` para iniciar a aplicação

Exemplo:

Em um terminal, rodar o servidor GraphQL:
```
cd graphq-server
npm install
npm run start
```

Em outro terminal, rodar o servidor do workshop:
```
cd workshop
npm install
npm run start
```

---

Lembrando que se você fizer alguma alteração no código do `graphql-server` será necessário parar a aplicação e roda-la denovo. Ou utilize um serviço de atualização de aplicações, como [Nodemon](https://www.npmjs.com/package/nodemon).