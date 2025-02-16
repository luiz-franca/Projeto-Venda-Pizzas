const express = require('express');
const PagamentoController = require('@controllers/PagamentoController');

const pagamentoRoute =  express.Router();

pagamentoRoute.get('/pagamentos', PagamentoController.getAllPagamentos);
pagamentoRoute.get('/pagamento/:id', PagamentoController.getPagamentoId);
pagamentoRoute.post('/pagamento', PagamentoController.insertPagamento);
pagamentoRoute.put('/pagamento/:id', PagamentoController.updatePagamento);
pagamentoRoute.delete('/pagamento/:id', PagamentoController.deletePagamento);
pagamentoRoute.get('/pagamentos-nomes-pedido', PagamentoController.getAllPagamentosStatusPedido);
module.exports = pagamentoRoute;