//importar a bibioteca  express
const express = require("express");
const { funcaoGenero } = require("../controllers/FilmesController");
//importar middlewares
const middlewareGuardaBusca= require('../middleware/middlewareGuardaBusca')
//criar o roteador com express.Router
const router = express.Router();

//Criar uma rota "/teste"respondendo oi! 
router.get('/teste',(req,res)=>{res.send("oi , sumido!")});





// Importar o FilmesController
const FilmesController = require('../controllers/FilmesController')


//criando as rotas 
router.get('/', FilmesController.index)
//funcao listar filmes
router.get('/filme',FilmesController.listarFilmes)

//fucao por genero

router.get('/genero', FilmesController.funcaoGenero)

//funcao posicao
router.get('/filmes/:id',FilmesController.buscarId)


//funcao buscar por trecho
router.get('/busca', middlewareGuardaBusca, FilmesController.buscarPorTrecho)



 


// funcao buscar id
router.get('/buscar/:id', FilmesController.buscarId)












// Exportar o roteador!
module.exports = router;