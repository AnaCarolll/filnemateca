//importacao da bibliote Express 
const express = require('express');

const path = require('path');

//importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter')

// criando um servirdor
const servidor = express();

//configuracao por Template Engine 
servidor.set('view engine','ejs');

//Configurando a pasta public como conedora estáticos
servidor.use(express.static(path.join(__dirname, 'public')));

//Usando FimesRouter
servidor.use('/',FilmesRouter)


//por o servirdor para 'ouvir' as requisicoes
servidor.listen(3000);

