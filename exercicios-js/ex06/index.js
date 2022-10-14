const btnDeTroca = document.getElementById("btn-de-troca");
let corTrocada = document.querySelector(".azul");
/*
btnDeTroca.addEventListener("click", trocaDeCor);

function trocaDeCor() {
    corTrocada.classList.remove("azul")
    corTrocada.classList.add("amarelo")
}
console.log(corTrocada)
*/
btnDeTroca.addEventListener("click", divAmarela)

function divAmarela(){
    corTrocada.style.backgroundColor = "yellow"
}