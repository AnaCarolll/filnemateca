module.exports = (req, res, next) => {


    //Vereficar see o usuario esta logado
    if (req.session.usuario == undefined) {
        //Se nao estiver, direcionar para endereco
        res.redirect('/login')
    } else {

        // Se nao estiver, IR ADIANTE !
        next();
    }
}