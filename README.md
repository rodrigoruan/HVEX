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

4° Instale as dependencias na pasta server e inicie a aplicação:
```bash
  cd server && npm install && npm start
```

5° Acesse a pasta client e instale as dependencias:
```bash
  cd client && npm install && npm start
```

<h2>Bibliotecas / Linguagens</h2>

 * [React](https://pt-br.reactjs.org/) - O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
 * [axios](https://axios-http.com/docs/intro) - Axios é um cliente HTTP baseado-em-promessas para o node. js e para o navegador.
 * [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) - O React Router é uma lib completa para controle de rotas.
 * [react-loading](https://www.npmjs.com/package/react-loading) - O React-Loading é uma lib com componentes de loading para o React.
 * [eslint](https://eslint.org/) - ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript.
 * [stylelint](https://stylelint.io/) - O StyleLint funciona analisando o seu CSS e avisando se alguma regra configurada for violada.
 
 * [MySQL](https://www.mysql.com/) - O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.
 * [Node](https://nodejs.org/en/) - Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
 * [dotenv](https://www.npmjs.com/package/dotenv) - Carrega variáveis de ambiente de um arquivo `.env` em `process.env`
 * [cors](https://www.npmjs.com/package/cors) - CORS - Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão.
 * [express](https://expressjs.com/pt-br/) - Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web.
 * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - JWT (JSON Web Token) é um método padrão da indústria para realizar autenticação entre duas partes por meio de um token assinado que autentica uma requisição web.
 * [bcrypt](https://www.npmjs.com/package/bcrypt) - bcrypt é um método de criptografia do tipo hash para senhas baseado no Blowfish.
 * [Joi](https://www.npmjs.com/package/joi) - O Joi usa uma linguagem descritiva para criar schemas de validação.

<h2>Contato</h2>

<p><a href="https://www.linkedin.com/in/rodrigo-ruan/">Linkedin</a></p>
<p><a href="mailto:rodrigopython16@gmail.com">Gmail</a></p>
