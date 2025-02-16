const express = require('express');
const ClienteController = require('@controllers/ClienteController');

const clienteRoute = express.Router();

clienteRoute.post('/clientes', ClienteController.registerCliente);
clienteRoute.get('/clientes', ClienteController.getAllClientes);
clienteRoute.get('/clientes/:id', ClienteController.getClienteById); 
clienteRoute.put('/clientes/:id', ClienteController.updateCliente); 
clienteRoute.delete('/clientes/:id', ClienteController.excluirCliente);

module.exports=clienteRoute;