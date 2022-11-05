let ferverAgua = function ( chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) =>{
        if (typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: água foi fervida.')
            resolve();
        }else{
            const mensagemDeErro = 'é preciso ligar o fogo e colocar a chaleira para ferver a água.'
            reject(mensagemDeErro);
        }
    })
};
let coarOCafe = (aguaFervida) => {
    return new Promise((resolve) =>{
        console.log('Passo 2 finalizado: café foi coado.');
        resolve(true);
    })
};

let tomarCafe = (cafeCoado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: terminei de tomar o café.');
        resolve(true);
    })
};
let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: terminei de lavar a xícara.');
        resolve(true);
    })
};

let chaleiraEstaNoFogao = 1;
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafeCoado = await coarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafeCoado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    }catch(err){
        console.log(err)
    }finally{
        console.log('Finalizado ritual do café, bora trabalhar.')
    }
};

iniciarProcessoDeFazerCafe()