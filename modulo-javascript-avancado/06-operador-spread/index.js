
// CONCATENAR DOIS ARRAYS
let pessoa = ['Roberto','Ricardo', 'Raphael'];
console.log(...pessoa);

let pessoa1 = ['Roberto','Ricardo', 'Raphael'];
let pessoa2 = ['Robson','Rick', 'Rufalo'];

// pessoa1 = pessoa1.concat(pessoa2)
pessoa1 =[...pessoa1, ...pessoa2]
console.log(pessoa1)

// CLONAR OBJETO

const pessoa4 = {nome: 'Roberto', idade: 33}
const objetoConado = {...pessoa4}

console.log(pessoa4)
console.log(objetoConado)