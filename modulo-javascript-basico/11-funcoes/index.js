/*
    function nomeDaFunacao(){
        <bloco de execucao>
    }

    nomeDaFuncao()
*/
/*
    function nomeDaFunacao(parametro1, parametro2){
        <bloco de execucao>
    }

    nomeDaFuncao(parametro1, parametro2)
*/

function incentivarQuester(nome = "Quester"){
alert(`Muito bem,${nome} você chegou ao JS, continue estudando!`)
}

incentivarQuester('Everson')

function somar(numero1, numero2){
    return numero1 + numero2
}

let resultadoDaSoma = somar(13, 15);
console.log(resultadoDaSoma)

resultadoDaSoma = somar(resultadoDaSoma, 50)
console.log(resultadoDaSoma)