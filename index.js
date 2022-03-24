//importacao da bibliote Express 
const express = require('express');

const path = require('path');
const middlewareGlobal = require ('./middleware/middlewareGlobal')
//importando os roteadores
const FilmesRouter = require('./routers/FilmesRouter');
const AdmRouter = require('./routers/AdmRouter');
// criando um servirdor
const servidor = express();

//configuracao por Template Engine 
servidor.set('view engine','ejs');

//Configurando a pasta public como conedora estáticos
servidor.use(express.static(path.join(__dirname, 'public')));



servidor.use(middlewareGlobal);

//Usando FimesRouter
servidor.use('/',FilmesRouter);
servidor.use('/',AdmRouter);

//por o servirdor para 'ouvir' as requisicoes
servidor.listen(3000);

