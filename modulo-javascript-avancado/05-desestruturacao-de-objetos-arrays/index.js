
// Desestrturação de Objeto
let pessoa = {nome: 'Roberto', sobrenome: 'Dias', idade: 40};
// let nome = pessoa.nome;
// let idade = pessoa.idade;

let {nome, idade, sobrenome: sobrenomepessoa } = pessoa;
console.log(nome);
console.log(idade);
console.log(sobrenomepessoa);


// Desestrturação de Array
const numeros=[1, 2, 3];
const [um, dois, tres] = numeros;

console.log(um);
console.log(dois);