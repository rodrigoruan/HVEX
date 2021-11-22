<h1>Github Search - HVEX</h1>

<p>Neste projeto foi realizado o desenvolvimento de uma aplicação para consulta de usuários a partir da API do Github.</p>
<p>A aplicação tem o intuito de procurar usuários do Github a partir de seus respectivos nomes / email, além de permitir o usuário se cadastrar e fazer login.</p>

![Alt Text](https://media.giphy.com/media/KwITd5nES1vS15cA7A/giphy.gif)

<h2>Funcionalidades</h2>

<ul>
  <li>Cadastrar um novo usuário no banco de dados</li>
  <li>Entrar na aplicação utilizando um usuário existente</li>
  <li>Pesquisar usuários pelo seu nome / email do Github</li>
</ul>

<h2>Instruções para rodar a aplicação</h2>

![Alt Text](https://media.giphy.com/media/6sz6gqNWhmXYtkeO3Q/giphy.gif)

<p>OBS: para executar o projeto é necessário ter um servidor MySQL instalado e rodando</p>

<a href="https://www.mysql.com/products/workbench/">Baixar MySQL aqui</a>

<br />

1° Clone o repositório a partir de seu terminal:
```bash
  git clone git@github.com:rodrigoruan/HVEX.git
```

2° Acesse seu MySQL e rode o código do arquivo createdb.sql
<img src="https://i.ibb.co/CbKzrL5/BD.png" alt="BD" border="0">

3° Acesse a pasta server e renomeie o arquivo '.env.dev' para '.env', coloque suas informações do MySQL (host, user, password e database).
ex:
```bash
host=localhost // host no MySQL
user=root // usuário no MySQL  
password=password // Senha no MySQl
database=HVEX   // Banco de dados criado no 2° passo
SECRET=HVEXSECRET // SECRET para o JWT (FIXO)
```

<img src="https://i.ibb.co/jVj14JT/envfile.png" alt="envfile" border="0">

Instale as dependencias na pasta server e inicie a aplicação:
```bash
  cd server && npm install && npm start
```

5° Acesse a pasta client e instale as dependencias:
```bash
  cd client && npm install && npm start
```

<h2>Bibliotecas / Linguagens</h2>

<ul>
  <li><a href="https://pt-br.reactjs.org/">React</a></li>
   <ul>
      <li><a href="https://www.npmjs.com/package/react-jwt">react-jwt</a></li>
      <li><a href="https://axios-http.com/docs/intro">axios</a></li>
      <li><a href="https://v5.reactrouter.com/web/guides/quick-start">react-router-dom</a></li>
      <li><a href="https://www.npmjs.com/package/react-loading">react-loading</a></li>
      <li><a href="https://eslint.org/">eslint</a></li>
      <li><a href="https://stylelint.io/">stylelint</a></li>
  </ul>
</ul>
  
<ul>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
  <li><a href="https://nodejs.org/en/">Node</a></li>
    <ul>
      <li><a href="https://www.npmjs.com/package/dotenv">dotenv</a></li>
      <li><a href="https://www.npmjs.com/package/cors">cors</a></li>
      <li><a href="https://expressjs.com/pt-br/">express</a></li>
      <li><a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a></li>
      <li><a href="https://www.npmjs.com/package/bcrypt">bcrypt</a></li>
      <li><a href="https://www.npmjs.com/package/joi">Joi</a></li>
    </ul>
</ul>

<h2>Contato</h2>

<p><a href="https://www.linkedin.com/in/rodrigo-ruan/">Linkedin</a></p>
<p><a href="mailto:rodrigopython16@gmail.com">Gmail</a></p>
