
//Lista das pizzas(Jason)
let pizzaData = [
    { id: 1, name: 'Mussarela', img: 'images/pizza.png', price: 20.19, sizes: ['100g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 2, name: 'Calabresa', img: 'images/pizza2.png', price: 18.00, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 3, name: 'Quatro Queijos', img: 'images/pizza3.png', price: 17.45, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 4, name: 'Americana', img: 'images/pizza4.png', price: 19.77, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 5, name: 'Sorvete', img: 'images/pizza5.png', price: 21.43, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 6, name: 'Moda da Casa', img: 'images/pizza6.png', price: 18.55, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 7, name: 'Chocolate', img: 'images/pizza7.png', price: 25.36, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' },
    { id: 8, name: 'Frango com Catupiry', img: 'images/pizza.png', price: 25.36, sizes: ['320g', '530g', '860g'], description: 'Descrição da pizza em mais de uma linha muito legal bem interessante' }
];


let pizzaJson = db.get('pizzas');
if (!pizzaJson) {
    db.set('pizzas', pizzaData);
    pizzaJson = pizzaData;
}

let pedidosJson = db.get('pedidos');
if (!pedidosJson) {
    db.set('pedidos', pedidosData);
    pedidosJson = pedidosData;
}



// LISTAR OS PEDIDOS EM ABERTO E EDITAR UM A UM
// ao clicar no pedido, vocë deve alimentar a variavel cart
// ao salvar, atualizar o id correspondente.
