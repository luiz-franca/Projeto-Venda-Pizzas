const ControleAdmin = require('./AdminController');
const ControleCliente = require('./ClienteController');
const ControleItem = require('./ItemController');
const ControlePagamento = require('./PagamentoController');
const ControlePedido = require('./PedidoController');
const ControlePedidoItem = require('./PedidoItemController');

const importControllers = {
    admin: ControleAdmin,
    cliente: ControleCliente,
    item: ControleItem,
    pagamento: ControlePagamento,
    pedido: ControlePedido,
    pedidoItem: ControlePedidoItem
};
module.exports = importControllers;