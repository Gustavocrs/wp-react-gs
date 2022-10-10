# Webpack Config

[**Autor: Gustavo Silva**](https://github.com/Gustavocrs)

**[Documentação Webpack](https://webpack.js.org/)**

[**Documentação Babel**](https://babeljs.io/)

**Referências:**

[React com Webpack - YouTube](https://www.youtube.com/watch?v=XS6uWKVXXgA)

[Você ENTENDE REALMENTE o Babel e Webpack que roda em seus Projetos JavaScript? // AluraJS #3 - YouTube](https://www.youtube.com/watch?v=LMCtGvLJT6c)

   
   
### Passo 1: Criando o package.json:

   ⇒ npm init -y

   Este comando irá criar o arquivo de configuração padrão.

   
   
### Passo 2: Instalando as dependências:

   ⇒ npm i -D webpack webpack-cli

   Este comando irá instalar o webpack e suas dependências.

   ⇒ npm i -D webpack-dev-server

   Este comando irá instalar um servidor para as dependências de dev do webpack

   ⇒ npm i -S react react-dom

   Este comando irá instalar o react e o react dom

   ⇒ npm i -D @babel/core @babel/cli babel-loader @babel/preset-env @babel/preset-react

   Este comando irá instalar o babel e as dependências necessárias para que ele funcione

   ⇒ npm i -D clean-webpack-plugin

   Instala plugin para limpar a pasta dist antes do build

   ⇒ npm i -D html-webpack-plugin

   Este comando irá instalar um plugin que gerará um arquivo HTML5 para incluir todos os seus pacotes webpack usando tags.

   
   
### Passo 3: Criando a estrutura de pastas:

   Criar pastas abaixo:

   ./src

   ./src/components

   ./public

   
   
### Passo 4: Configurando a estrutura de arquivos:

   ⇒ Criar arquivo **src**/index.jsx e adicionar as configurações abaixo:

   ```
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App.jsx';
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

   ⇒ Criar arquivo src/App.jsx e adicionar as configurações abaixo:

   ```
   import React from "react";
   const App = () => {
     return (
       <>
         <h1>New Webpack App</h1>
       </>
     );
   };
   export default App;
   ```

   ⇒ Criar arquivo src/index.html com a configuração padrão do Emmet (! + Enter) e criar a tag abaixo dentro do <body>:

   ```
     <div id="root"></div>
   ```

   ⇒ Alterar o package.json e adicionar/alterar os scripts abaixo:

   ```
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "webpack-dev-server --mode development --open",
       "build": "webpack --mode production"
     }
   ```


   **Passo 5: Configurando o webpack.config.jsx e .babelrc:**

   ⇒ Criar arquivo src/webpack.config.jsx e adicionar as configurações abaixo:

   ```
   const path = require("path");
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   const { CleanWebpackPlugin } = require("clean-webpack-plugin");
   module.exports = {
     mode: "development",
     entry: path.resolve(__dirname, "./src/index.jsx"),
     output: {
       filename: "build.js",
       path: path.resolve(__dirname, "static"),
     },
     module: {
       rules: [
         {
           //Jsx & Js
           test: /\.(js|jsx)$/,
           exclude: /node-modules/,
           use: {
             loader: "babel-loader",
             options: {
               presets: ["@babel/preset-env", "@babel/preset-react"],
             },
           },
         },
         {
           //Svgs
           test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
           type: "asset/inline",
         },
         {
           //Imagens
           test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
           type: "asset/resource",
         },
       ],
     },
     plugins: [
       new HtmlWebpackPlugin({
         filename: "index.html",
         template: path.resolve(__dirname, "./public/index.html"),
       }),
       new CleanWebpackPlugin(),
     ],
     devServer: {
       static: {
         directory: path.join(__dirname, "public"),
       },
       compress: true,
       hot: true,
       port: 3333,
     },
   };
   ```

   ⇒ Criar arquivo .babelrc na pasta raiz e adicionar as configurações abaixo:

   ```
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"],
   }
   ```

   
  
### Passo 6: Criando o .gitignore:

   ⇒ Criar arquivo .gitignore com os comandos abaixo:

   ```
   # dependencies
   /node_modules
   /.pnp
   .pnp.js
   # production
   /build
   # misc
   .DS_Store
   .env.local
   .env.development.local
   .env.test.local
   .env.production.local
   ```

   
  
### Passo 7: Rodando o projeto:

   ⇒ npm start

   
  
### Passo 8: Rodando o build:

   ⇒ npm run build   
