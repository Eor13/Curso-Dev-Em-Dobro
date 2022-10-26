// Passo 1 - Pegar todos os inputs que tenham a mesma classe.
 const doubts = document.querySelectorAll(".doubt");

 // Passo 2 - Dar um jeito de percorrer cada input.
 doubts.forEach((doubt) =>{
     // Passo 3 - ao clicar em uma pergunta deve acontecer uma animação de acordeon para abrir o item mostrar o texto escondido e a seta deve mudar de cor. 
     doubt.addEventListener("click", () =>{
        const doubtSelected = document.querySelector(".selected");
        
        if(doubtSelected){
            doubtSelected.classList.remove("selected");
        }
        doubt.classList.add("selected");
        
    })
    })