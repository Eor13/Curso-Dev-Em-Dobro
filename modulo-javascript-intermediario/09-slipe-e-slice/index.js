// SLICE
// arr.slice([inicio,[fim]])

let frutas =["Banana","Maça", "Laranja", "Uva"];

// let frutasExtraidas = frutas.slice(1,3)
// slice excluí o indice inicial 0  e o indice final 3. Mantendo só o indice 1 e 2  nesse exemplo.
// console.log(frutasExtraidas)

// SPLICE
// frutas.splice(indice,nº-itens-removidos)
// let frutasExtraidas = frutas.splice(1, 2)
// console.log(`Frutas Removidas `+ frutasExtraidas)
// console.log(`Frutas Mantidas `+ frutas)

let removeEAdicionaFrutas = frutas.splice(1,2,"Goiaba","Kiwi","Morango")

console.log(frutas)
console.log(removeEAdicionaFrutas)