let jogo1 ={
	nome:"Final Fanstasy"
}
let jogo2 ={
	nome:"Fallout"
}

let videoGame = {
	nome: 'Xbox',
	valor: 3000,
	jogos: [jogo1, jogo2]
}

let jogo3 = {
	nome:'Fifa'
}

videoGame.jogos.push(jogo3)
console.log(videoGame)


let cliente = {
	nome: 'Everson',
	ultimoPedido:{
		produto:'xbox',
		valor:3000,
		jogos:[{nome:'Fifa'}
		]
	}
}
console.log(cliente.ultimoPedido.jogos[0].nome)