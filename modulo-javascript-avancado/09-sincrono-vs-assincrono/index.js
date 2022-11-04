function colocarAguaParaFerver(){
    console.log("colocar água para ferver")

    setTimeout(() => {
        console.log('água ferveu')
        CoarOCafe()
    }, 5000);
}
function PrepararParaCoarOCafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log('colocar o filtro em cima da jarra')
    console.log('colocar o café no filtro')
}

function CoarOCafe() {
    console.log('passando o café')
}
colocarAguaParaFerver()
PrepararParaCoarOCafe()