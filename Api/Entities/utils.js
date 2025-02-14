const ClasseAdmin = require('./ClasseAdmin');
const ClasseClient = require('./ClasseClient');
const ClasseEstoque = require('./ClasseEstoque');
const ClasseItem = require('./ClasseItem');
const ClassePagamento = require('./ClassePagamento');
const ClassePedido = require('./ClassePedido');
const ClassePedidoItem = require('./ClassePedidoItem')

const importEntidades = {
    Admin: ClasseAdmin,
    Cliente: ClasseClient,
    Estoque: ClasseEstoque,
    Item: ClasseItem,
    Pagamento: ClassePagamento,
    Pedido: ClassePedido,
    PedidoItem: ClassePedidoItem
};
module.exports = importEntidades;