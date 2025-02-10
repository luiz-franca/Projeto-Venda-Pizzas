const AdminModel = require('./AdminModel');
const ClienteModel = require('./ClienteModel');
const EstoqueModel =require('./EstoqueModel');
const ItemModel = require('./ItemModel');
const ItemEstoqueModel = require('./ItemEstoqueModel');
const LogEstoqueModel = require('./LogEstoqueModel');
const LogPedidoModel = require('./LogPedidoModel');
const PagamentoModel = require('./PagamentoModel');
const PedidoModel = require('./PedidoModel');
const PedidoItemModel = require('./PedidoItemModel');

const exportModels = {
    admin: AdminModel,
    cliente: ClienteModel,
    estoque: EstoqueModel,
    item: ItemModel,
    itemEstoque: ItemEstoqueModel,
    logEstoqe: LogEstoqueModel,
    logPeido: LogPedidoModel,
    pagamento: PagamentoModel,
    pedido: PedidoModel,
    pedidoItem: PedidoItemModel


}
module.exports = exportModels;