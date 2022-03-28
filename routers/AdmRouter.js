

//importe o express
const express = require("express")
const AdmController = require ('../controllers/AdmController')
//Criando o roteador
const router = express.Router();
// crio a rota
router.get('/login',AdmController.login);

router.get('/esqueci', AdmController.esqueci)

// Exportar o roteador

module.exports = router