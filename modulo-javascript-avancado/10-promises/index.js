/*
    Pendente - estado inicial
    Realizado - resolve - tudo ok!
    Recusada - reject - Erro!
    Estabelecida - quando é resolve ou reject
*/

// new Promise((resolve, reject) => {

// })


let ferverAgua = function ( chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) =>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de fervura da água.')
            resolve();
        }else{
            console.log('é preciso ligar o fogo e colocar a chaleira para ferver a água')
            reject();
        }
    })
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
console.log('fazendo o café');