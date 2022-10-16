// Passo 1 - Pegar todos os inputs que tenham a mesma classe.
const inputTexto = document.querySelectorAll("#tag-input")
console.log(inputTexto)

// Passo 2 - Dar um jeito de percorrer cada input.
inputTexto.forEach(inputNomeEscolhivel => {
    // Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
    inputNomeEscolhivel.addEventListener("change", () => {
        // Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
        if(inputNomeEscolhivel.value !== ""){
            // Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
            inputNomeEscolhivel.style.border="3px solid green"
        }
    })
});