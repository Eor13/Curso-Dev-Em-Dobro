let ferverAgua = function ( chaleiraEstaNoFogao, fogaoEstaLigado) {
    return new Promise((resolve, reject) =>{
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('Passo 1 finalizado: água foi fervida.')
            resolve();
        }else{
            console.log('é preciso ligar o fogo e colocar a chaleira para ferver a água')
            reject();
        }
    })
};
let coarOCafe = (aguaFervida) => {
    return new Promise((resolve) =>{
        console.log('Passo 2 finalizado: café foi coado');
        resolve(true);
    })
};

let tomarCafe = (cafeCoado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: terminei de tomar o café');
        resolve(true);
    })
};
let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: terminei de lavar a xícara');
        resolve(true);
    })
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

// ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
//     .then(() => {
//         return coarOCafe();
//     })
//     .then(() => {
//         return tomarCafe();
//     })
//     .then(() => {
//         return lavarXicara();
//     })
//     .then(() => {
//         console.log('Finalizado ritual do café, bora trabalhar.')
//     })

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    console.log(aguaFervida)
    const cafeCoado = await coarOCafe(aguaFervida)
    console.log(cafeCoado)
    const cafeTomado = await tomarCafe(cafeCoado)
    console.log(cafeTomado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    console.log(xicaraLavada)
    if(xicaraLavada) console.log('Finalizado ritual do café, bora trabalhar.')
};

iniciarProcessoDeFazerCafe()