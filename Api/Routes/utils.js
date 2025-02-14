const AdminRoute = require("./AdminRoute");
// const ClienteRoute = require("./ClienteRoute");
// const EstoqueRoute = require("./EstoqueRoute");
// const ItemRoute = require("./ItemEstoque");
// // const ItemEstoqueRoute = require("./ItemEstoqueRoute");
// const LogEstoqueRoute = require("./LogEstoqueRoute");
// const LogPedidoRoute = require("./LogPedidoRoute");
// const PagamentoRoute = require("./PagamentoRoute");
// const PedidoRoute = require("./PedidoRoute");
// const PedidoItemRoute = require("./PedidoItemRoute");

const utilsRoute = {
    admin: AdminRoute,
    // cliente: ClienteRoute,
    // estoque: EstoqueRoute,
    // item: ItemRoute,
    // ItemEstoque: ItemEstoqueRoute,
    // logEstoque: LogEstoqueRoute,
    // logPedido: LogPedidoRoute,
    // pagamento: PagamentoRoute,
    // pedido: PedidoRoute,
    // pedidoItem: PedidoItemRoute
}
module.exports = utilsRoute;