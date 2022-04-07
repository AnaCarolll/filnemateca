//module.exports = (req, res, next)
//console.log("Passando no middleware global...");

module.exports = (req,res,next) => {
 
    let data = new Date()
    let hora = data.getHours();
    if(hora<8 || hora>= 22 ){
        res.send("Já e tarde... vá para casa")
    }else{
     console.log('A requisição esta indo...');
        next();
        console.log('A resposta esta voltando...')
     }
 }
 