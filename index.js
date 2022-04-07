//importacao da bibliote Express 
const express = require('express');
const session = require('express-session')
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

//Configurando o middleware que lida com session
servidor.use(session({secret:"SEGREDO",saveUninitialized: false, resave: true}
));

//põe as informações do formulario no req.body
servidor.use(express.urlencoded({ extended: false }));



servidor.use(middlewareGlobal);

//Usando FimesRouter
servidor.use('/',FilmesRouter);
servidor.use('/',AdmRouter);

//por o servirdor para 'ouvir' as requisicoes
servidor.listen(3000);

