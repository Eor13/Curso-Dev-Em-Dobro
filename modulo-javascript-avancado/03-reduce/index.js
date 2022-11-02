let ordens = [
    {cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo:'NFLX34'},
    {cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo:'AAPL34'},
    {cliente: 'Raphael', tipo: 'venda', quantidade: 21, ativo:'GOOL34'}
];

// let quantidadeDeOrdens =0;
// for(let i=0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// };
// console.log(quantidadeDeOrdens);

// Primeira maneira de usar o REDUCE
let quantidadeDeOrdens = ordens.reduce(function(somaDasOrdens, ordem){
    // console.log('Ordem', somaDasOrdens, ordem)
    return somaDasOrdens + ordem.quantidade;
},0);

console.log(quantidadeDeOrdens);

// Segunda maneira de usar o REDUCE
let quantDeOrdens = ordens.reduce((somaDasOrdens, ordem) => somaDasOrdens + ordem.quantidade,0);

console.log(quantDeOrdens);