const calcularValorPedido = require('./calcular-valor-pedido');

it('Não cobrará entrega quando a somar do valor dos produtos for superior a 50', () => {
    // AAA - 3 passos de criação de um teste
    
    // ARRANGE - Arrumar-  um Array ou Objeto para passar para dentro da função testada
    const meuPedido = {
        item: [
            { nome: 'Assadeira', valor:12},
            { nome: 'Caneca', valor:60},
            { nome: 'Entrega', valor: 40, entrega: true}
        ]
    };

    // ACT - Ação - o que vai ser testado
    const resultado = calcularValorPedido(meuPedido);
    // ASSERT - Asserção qual o resultado esperado
    expect(resultado).toBe(72);
});

it('deve cobra valor de entrega quando o dos produtos forem menor que 50', () =>{
    const meuPedido = {
        item: [
            { nome: 'Assadeira', valor:12},
            { nome: 'Caneca', valor:14},
            { nome: 'Entrega', valor: 40, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(66);
}
)
it('deve cobra valor de entrega quando o dos produtos forem IGUAL a 50', () =>{
    const meuPedido = {
        item: [
            { nome: 'Assadeira', valor:25},
            { nome: 'Caneca', valor:25},
            { nome: 'Entrega', valor: 40, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(90);
})

// CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER COBRADO UM VALOR DE 20% NA ENTREGA

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () =>{
    const meuPedidoComEstadoRS = {
        estado: 'RS',
        item: [
            { nome: 'Assadeira', valor:25},
            { nome: 'Caneca', valor:25},
            { nome: 'Entrega', valor: 40, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedidoComEstadoRS)

    expect(resultado).toBe(98)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () =>{
    const meuPedidoComEstadoSC = {
        estado: 'SC',
        item: [
            { nome: 'Assadeira', valor:25},
            { nome: 'Caneca', valor:25},
            { nome: 'Entrega', valor: 40, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedidoComEstadoSC)

    expect(resultado).toBe(98)
})
it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () =>{
    const meuPedidoComEstadoSP = {
        estado: 'SP',
        item: [
            { nome: 'Assadeira', valor:25},
            { nome: 'Caneca', valor:25},
            { nome: 'Entrega', valor: 40, entrega: true}
        ]
    };

    const resultado = calcularValorPedido(meuPedidoComEstadoSP)

    expect(resultado).toBe(90)
})