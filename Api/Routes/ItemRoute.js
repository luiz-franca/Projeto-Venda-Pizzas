const express = require('express');
const ItemController = require('./../Controllers/ItemController');

const itemRouter = express.Router();

itemRouter.get('/itens', ItemController.getAllItems);
itemRouter.get('/itens/:id', ItemController.getItemById); 
itemRouter.post('/itens', ItemController.addItem); 
itemRouter.put('/itens/:id', ItemController.updateItem); 
itemRouter.delete('/itens/:id', ItemController.deleteItem); 
module.exports = itemRouter;