'use strict'

// console.log(this)
/*
console.log(window)
console.log(window ===this)

this.name = "Everson";

function saudar(){
    console.log('This no contexto da função', this)
    console.log("Olá " + this.name)
}
 saudar()
*/

let usuario = {
    name: "Everson",
    saudar: function(){
        console.log('This no contexto da função', this)
        console.log('This no contexto da função', this.name)
    }
}

usuario.saudar()

let comida = {
    name: 'Brócolis',
    temperatura: 0
    }
    
    comida.cozinhar = function(/*comidaParaCozinhar,*/ temperaturaDeCozimento){
        // o objeto comida será cozinhada e terá a temperatura alterada para 100.
        // comidaParaCozinhar.temperatura = temperaturaDeCozimento;
        this.temperatura = temperaturaDeCozimento
    }
    
    console.log(comida)
    comida.cozinhar(comida, 100)
    console.log(comida)