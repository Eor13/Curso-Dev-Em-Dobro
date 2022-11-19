const acrescimoValorEntrega = 0.2

const calcularValorPedido = pedido =>{
    const valorProdutos = pedido.item
    .filter(item => !item.entrega)
    .reduce((totalPedido, pedidoAtual) => totalPedido + pedidoAtual.valor,0);

    const entrega = pedido.item.filter(item => item.entrega);

    if(pedido.estado === "RS" || pedido.estado === "SC"){
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega
        entrega[0].valor += acrescimoEntrega
    }



    return (valorProdutos > 50) ? valorProdutos :valorProdutos + entrega[0].valor

    // if(valorProdutos > 50){
    //     return valorProdutos;
    // }else {
    //     return valorProdutos + entrega[0].valor;
    // };
};
// pedido.item.reduce((totalPedido, pedidoAtual) => totalPedido + pedidoAtual.valor,0) //66

module.exports =calcularValorPedido;