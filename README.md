# criando ambiente

```
$ node --version
v12.22.5
$ npm init -y
{
  "name": "apiwebhook",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.1"
  }
}
$ npm install --save express
{
...
  "dependencies": {
    "express": "^4.18.1"
  }
}
npm install --save-dev nodemon

{
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
}
$ npm start
inicia o node server.js
$ npm run dev
inicia o nodemon server.js
// se atualizar codigo renderiza servidor
$ npm install --save morgan

```

# aa