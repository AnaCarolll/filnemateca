const FilmesController = {
    index: (req, res) => {
        //Carregar todos os filmes 
        const filmes = require('../database/filmes.json')
        // Renderizar a view index.ejs (ainda nao existe) passando os filmes para ele
        res.render('index.ejs', { filmes });
    },
    //funcao listar filmes
    listarFilmes: (req, res) => {
        const filmes = require('../database/filmes.json')

        //enviar os filmes
        res.send(filmes)
    },





    //fucao por genero
    funcaoGenero: (req, res) => {
        console.log("rota /genero acessada")
        res.send("drama,aventura,")
    },

    //funcao posicao
    funcaoPosicao: (req, res) => {
        // Capturei a posição do filme desejado
        let posicao = req.params.posicao;

        // Carregar o array de filmes
        const filmes = require('../database/filmes.json');

        // Enviar para o cliente a view com filme
        // da posicao desejada
        let filme = filmes[posicao];
        res.render('filme.ejs', { filme })



    },


    buscarPorTrecho: (req, res) => {
        // 1: Salvar o trecho buscado na variável 'trecho';
        let trecho = req.query.busca;


        // 2: Importar onteúdo de filmes.json para uma constante 'filmes'
        const filmes = require('../database/filmes.json')


        // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo
        let filtradora = filme => {
            return filme.titulo.includes(trecho);

        }
        let resultadoDaBusca = filmes.filter(filtradora);
        //    (lembrem da função filmes.filter)


        // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
        res.render('index.ejs', { filmes: resultadoDaBusca });
    },
    buscarId: (req, res) => {
        //capturar o id do filme 
        let id = req.params.id
        
        const filmes = require('../database/filmes.json')

        // Encontrar o filme que tem o id desejado
let filtradora = filme => {
    if(filme.id == id){
        return true;
    }else{
        return false;
    }
    
} 

const filme =  filmes.find(filtradora);


//retornando um view de filme para o cliente

res.render('filme.ejs',{filme})


    }
}




module.exports = FilmesController;