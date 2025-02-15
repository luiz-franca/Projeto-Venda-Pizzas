const express = require('express');
const LogPedidoController = require('./../Controllers/LogPedidoController');

const logPedidoRoute = express.Router();
logPedidoRoute.post('/logs-pedido', LogPedidoController.insertLogPedido); 
logPedidoRoute.get('/logs-pedido', LogPedidoController.getAllLogsPedido); 
logPedidoRoute.get('/logs-pedido/:id', LogPedidoController.getLogPedidoById); 
logPedidoRoute.delete('/logs-pedido/:id', LogPedidoController.deleteLogPedido);
logPedidoRoute.get('/logs-pedido/admin/:idAdmin', LogPedidoController.getLogsPedidoByIdAdmin); 
logPedidoRoute.get('/logs-pedido/pedido/:idPedido', LogPedidoController.getLogsPedidoByIdPedido); 

module.exports = logPedidoRoute;