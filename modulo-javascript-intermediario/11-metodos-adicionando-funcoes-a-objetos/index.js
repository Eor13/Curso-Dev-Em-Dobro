let usuario = {
    nome: 'Everson',
    excluir: function(){
        console.log('O usuário, '+ this.nome +' foi excluído!')
    }
}

usuario.excluir()