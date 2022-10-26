//- passo 1 - dar um jeito de pegar os elementos que representam as setas, imge  m de fundo e bloco no HTML
const setaVoltar = document.querySelector(".seta-esquerda");
 const setaAvancar = document.querySelector(".seta-direita");
 const blocos = document.querySelectorAll(".bloco");
 let blocoAtual = 0;
 
 function esconderFundoExibido(){
   const fundoExibido = document.querySelector(".selecionado");
   fundoExibido.classList.remove("selecionado");
}

function exibirFundo(){
   blocos[blocoAtual].classList.add("selecionado");
}

function mostrarOuEsconderSetas(){
   const naoEhAPrimeiroBloco = blocoAtual != 0;
   if(naoEhAPrimeiroBloco){
      setaVoltar.classList.remove("opacidade");
   } else{
      setaVoltar.classList.add("opacidade");
   }

   chegouNoUltimoBloco = blocoAtual!=0 && blocoAtual === blocos.length - 1;
   if(chegouNoUltimoBloco){
      setaAvancar.classList.add("opacidade")
   }else{
      setaAvancar.classList.remove("opacidade")
   }
}

//- passo 2 - dar um jeito de identificar o clique no elemento da seta avançar
setaAvancar.addEventListener("click", function(){
   if(blocoAtual === blocos.length - 1){
      return
   }
   
   // - passo 3 - quando o usuário clicarna seta direita, desmarcar a imagem atual selecionada
   esconderFundoExibido();
   
   blocoAtual++
   // - passo 4 - marcar a proxima imagem como selecionada
   exibirFundo();
   mostrarOuEsconderSetas();
})

//- passo 5 - dar um jeito de identificar o clique no elemento da seta avançar
setaVoltar.addEventListener("click", function(){
   if(blocoAtual === 0){
      return;
   }
   
   blocoAtual--;
   // - passo 6 - quando o usuário clicarna seta direita, desmarcar a imagem atual selecionada
   esconderFundoExibido();
   // - passo 7 - marcar a proxima imagem como selecionada
   exibirFundo();
   mostrarOuEsconderSetas();
})