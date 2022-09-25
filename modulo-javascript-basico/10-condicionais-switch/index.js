// switch(parametro){
//  case valor 1;
//      <bloco de execução></bloco>:
//      break;
//  case valor 2;
//      <bloco de execução></bloco>:
//      break;
//}

let nomeFilme = "Carrinhos";

switch(nomeFilme){
    case "Vingadores":
        console.log("É o filme dos Vingadores");
        break;
    case "Liga da Justiça":
        console.log("É o filme da Liga da Justiça");
        break;
    case "Tekken":
        console.log("É o filme do Tekken");
        break;
    case "Harry Potter":
        console.log("É o filme do Harry Potter");
        break;
    default:
        console.log("É outro filme");
        break;
}

let avaliacao = 3

switch(avaliacao){
    case 1:
    case 2:
        console.log("Filme ruim");
        break;
    case 3:
    case 4:
        console.log("Filme mediano");
        break;
    case 5:
        console.log("Filme Excelente");
        break;
    default:
        console.log("Nota inválida");
        break;
}