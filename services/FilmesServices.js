const filmes = require('../database/filmes.json');
const uniqid = require('uniqid');
const fs = require('fs')
const services = {
listar: function(){
     return  filmes;
   },
getTitulos: function(){
    let titulos;
     for(f of filmes ){
    console.log(f.titulo);
}
     return titulos;
     },
  
  creat: function(cartaz,titulo,censura,trailer,sinopse, generos){
        // 1: Gerar um id para o novo filme
         let id = uniqid();
      
         // 2: Criar um objeto literal com as informações do novo filme
         let novoFilme={cartaz,titulo,censura,trailer,
         sinopse, generos
        }
        
        // 3: Adicionar esse objeto criado ao array de filmes
         filmes.push(novoFilme);
      
         // 4: Salvar o conteúdo do array filmes no arquivo filmes.json
         fs.writeFileSync(__dirname+'/../database/filmes.jason', JSON.stringify (filmes, null,4))


  },

  apagar: function(){},
  editar: function(){}
};
services.getTitulos();


//module.exports = services;