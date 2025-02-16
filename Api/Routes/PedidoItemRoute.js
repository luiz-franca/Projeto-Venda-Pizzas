const express = require('express');
const PedidoController = require('@controllers/PedidoItemController');

const pedidoItenRoute = express.Router();
pedidoItenRoute.get('/pedidos-item', PedidoController.getAllPedidoItens);
pedidoItenRoute.get('/pedidos-item-nomes', PedidoController.getAllPedidoItensNomes);
pedidoItenRoute.get('/pedidos-item/:id', PedidoController.getPedidoItemId);
pedidoItenRoute.get('/pedidos-item-nomes/:id', PedidoController.getPedidoItemNomeId);
pedidoItenRoute.post('/pedidos-item', PedidoController.insertPedidoItem);
pedidoItenRoute.put('/pedido-item/:id', PedidoController.updatePedidoItem);
pedidoItenRoute.delete('/pedido-item/:id', PedidoController.deletePedidoItem);

module.exports = pedidoItenRoute;