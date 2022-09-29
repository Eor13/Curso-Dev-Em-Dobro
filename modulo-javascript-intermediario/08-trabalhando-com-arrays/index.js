
// let frutasTamanhos =frutas.length

// for(let i= 0;i <frutasTamanhos;i++){
    //     console.log(`Fruta: ${frutas[i]}`)
    // }
    
let frutas = ["banana", "maça","laranja","pêra"]
let posicaoLaranja = frutas.indexOf('laranja')
console.log(posicaoLaranja)

frutas.push("manga")
frutas.pop()
frutas.unshift("morango")
frutas.shift()
console.log(frutas)


// frutas.forEach(function(item, indice, array){
//     console.log(`Fruta: ${item}`)
// })