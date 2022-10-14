let quadrado = document.querySelector(".quadrado");

quadrado.addEventListener("click", Verificar)

function Verificar(){ 
    const classeAzulExiste = quadrado.classList.contains("azul")
    if(classeAzulExiste){
        quadrado.classList.remove("azul")
        console.log(quadrado)
    }else{
        quadrado.classList.add("azul")
        alert(`Esse quadrado TEM a classe azul!`)
        console.log(quadrado)
    }
}




