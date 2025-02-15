const express = require('express');
const PedidoController = require('@controllers/PedidoController');

const pedidoRoute = express.Router();

pedidoRoute.get('/pedidos', PedidoController.getAllPedidos);
pedidoRoute.post('/pedidos', PedidoController.insertPedido); 
pedidoRoute.put('/pedidos/:id', PedidoController.updatePedido); //"dataPedido": "2023-10-01", modelo de data
pedidoRoute.delete('/pedidos/:id', PedidoController.deletePedido); 
pedidoRoute.get('/pedidos/cliente/:idClient', PedidoController.getPedidosClienteId);

module.exports = pedidoRoute;