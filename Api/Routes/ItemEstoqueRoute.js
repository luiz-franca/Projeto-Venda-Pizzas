const express = require('express');
const ItemEstoqueController = require('./../Controllers/ItemEstoqueController');

const itemEstoqueRoute = express.Router();

itemEstoqueRoute.get('/itens-estoque', ItemEstoqueController.getAllItensEstoque); 
itemEstoqueRoute.get('/itens-estoque/nomes', ItemEstoqueController.getAllNomesItensEstoque); 
itemEstoqueRoute.get('/itens-estoque/nome/:idItem', ItemEstoqueController.getIdNomeItemEstoque); 
itemEstoqueRoute.put('/itens-estoque/:idItem/:idEstoque', ItemEstoqueController.updateItemEstoque); 
itemEstoqueRoute.delete('/itens-estoque/:idItem/:idEstoque', ItemEstoqueController.deleteItemEstoque); 
itemEstoqueRoute.get('/itens-estoque/:idItem/:idEstoque', ItemEstoqueController.getItemEstoqueId); 
module.exports = itemEstoqueRoute;