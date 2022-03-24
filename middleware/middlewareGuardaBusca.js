//Importar biblioteca de mexer 
const fs = require ('fs'); 

module.exports = (req, res, next)=>{

// Capturar o trecho buscando 
 let trechoBuscado = req.query.busca + '\n';

 // Salvar o trecho buscado o final de um arquivo
 fs.writeFileSync('./trechosBuscados.txt', trechoBuscado, {flag:'a+' })

 //Passando a requisao á diante.
 next()

 }