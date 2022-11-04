// function(a, b, ...arg){
//     ...
// }

function incentivarQuester(mensagem, ...nomesQuester){

    nomesQuester.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester(`Parabéns por ter chegado ao módulo de Javascript avançado,`, `João`, 'Pedro', 'Daniel',1, true)