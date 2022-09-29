// const calcularAnoDeNascimento = function(idade, mesDeNascimento,imprimir){ //primeira função
//     const mesAtual = 9;
//     let anoDeNascimento = 2022 - idade;
//     if(mesDeNascimento >mesAtual) anoDeNascimento--;
//     imprimir(anoDeNascimento);//chama a segunda função
// }

// let imprimirAnoDeNacimento = anoDeNascimento =>{//segunda função
//     console.log(`Seu ano de nascimento é ${anoDeNascimento}`);
// }
// calcularAnoDeNascimento(28,9,imprimirAnoDeNacimento);

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar =multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3)) // 4
console.log(triplicar(3)) // 6
console.log(quadruplicar(3)) // 8