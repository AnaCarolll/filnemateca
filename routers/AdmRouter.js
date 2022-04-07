

//importe o express
const express = require("express")
const verificaSeEstaLogado = require("../middleware/verificaSeEstaLogado")
const AdmController = require ('../controllers/AdmController')
//Criando o roteador
const router = express.Router();
// crio a rota
router.get('/login',AdmController.mostrarlogin);
router.post('/login',AdmController.login);
router.get('/esqueci', AdmController.mostraEsqueci);
router.post('/esqueci', AdmController.lembrarSenha)
//Definam no AdmRouter uma rota get para o endereço /admin direcionando a requisição para o controller AdmController.showAdmin
router.get('/admin', verificaSeEstaLogado, AdmController.mostraAdmin )

// Exportar o roteador

module.exports = router;