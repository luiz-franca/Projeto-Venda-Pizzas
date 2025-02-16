const express = require('express');
const EstoqueController = require('@controllers/EstoqueController');

const estoqueRoute = express.Router();

estoqueRoute.post('/estoque', EstoqueController.insertInsumoEstoque); 
estoqueRoute.get('/estoque', EstoqueController.getAllEstoque); 
estoqueRoute.put('/estoque/:id', EstoqueController.updateEstoque); 
estoqueRoute.delete('/estoque/:id', EstoqueController.deleteEstoque); 
estoqueRoute.get('/estoque/:id', EstoqueController.getIdEstoque);
module.exports = estoqueRoute;