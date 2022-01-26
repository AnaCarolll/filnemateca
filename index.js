//importacao da bibliote Express 
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

// criando um servirdor
const servidor= express();

//criando as rotas 
servidor.get('/', (req,res) => {
    console.log("a pergunta");
    res.send("a resposta");
})

servidor.get('/filme', (req,res) => {
    console.log("rota /filme acessada")
    res.send("Filme: Crepusculo")

})

servidor.get('/genero', (req,res)=>{
    console.log("rota /genero acessada")
    res.send("drama,aventura," )
})


// carregar o array de filmes
servidor.get('/filmes/:posicao', (req, res)=>{
    // Capturei a posição do filme desejado
    let posicao = req.params.posicao;

    // Carregar o array de filmes
    const filmes = require('./database/filmes.json');

    // Enviar para o cliente o filme da posicao desejada
    res.send(filmes[posicao])

})

    // 1: Salvar o trecho buscado na variável 'trecho';
    
    // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'
    const filmes = require('./')
    // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo

    //    (lembrem da função filmes.filter)
    
    // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.






// Criar uma rota que responda à requisição 'http://localhost:3000/busca/????'
servidor.get('/busca/:trecho', (req, res)=>{
    console.log("alguem acessou a rota")
    res.send(req.params.trecho)
    
})
// Faça com que ela responda "oi"
 











//por o servirdor para 'ouvir' as requisicoes
servidor.listen(3000);

