// const imprimirInformaçoesPessoa = (primeiroNome, ultimoNome, idade) =>{
//     return "Primeiro Nome: " + primeiroNome + ", Ultimo Nome: " + ultimoNome + ", Idade " + idade;
// };

// console.log(imprimirInformaçoesPessoa("Everson", "Ribeiro", 28));


const imprimirInformaçoesPessoa = (primeiroNome, ultimoNome, idade) =>{
    return `Primeiro Nome: ${primeiroNome}, Ultimo Nome: ${ultimoNome}, Idade: ${idade}`
};

console.log(`${imprimirInformaçoesPessoa("Everson", "Ribeiro", 28)}, ele é um DevQuester.`);