const adminService = require("./AdminService");
const clienteService = require("./ClienteService");
const estoqueService = require("./EstoqueService");
const itemService = require("./ItemService");
const itemEstoqueService = require("./ItemEstoqueService");
const pedidoService = require("./PedidoService");
const pedidoItemService = require("./PedidoItemService");
const logEstoqueService = require("./LogEstoqueService");
const logPedidoService = require("./LogPedidoService");
const pagamentoService = require("./PagamentoService");

const utilsService = {
    admin: adminService,
    cliente: clienteService,
    estoque: estoqueService,
    item: itemService,
    itemEstoque: itemEstoqueService,
    pedido: pedidoService,
    pedidoItem: pedidoItemService,
    logEstoque: logEstoqueService,
    logPedido: logPedidoService,
    pagamento: pagamentoService
}
module.exports = utilsService;