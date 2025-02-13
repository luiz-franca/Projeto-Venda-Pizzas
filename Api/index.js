require('./aliases');
require('dotenv').config({path:'./.env'})
const dbconnect = require('@configs/dbconnect')
const ClasseAdmin = require('@entidades/ClasseAdmin');
const AdminModel = require('@models/AdminModel');
const ClienteModel = require('@models/ClienteModel');
const EstoqueModel = require('@models/EstoqueModel');
const ItemEstoqueModel = require('@models/ItemEstoqueModel');
const Item = require('@models/ItemModel');
const AdminController = require('@controllers/utils');
const AdminService = require('@servicos/AdminService');
const ClienteService = require('@servicos/ClienteService');
const EstoqueService = require('@servicos/EstoqueService');
const ItemEstoqueService = require('@servicos/ItemEstoqueService');
const ItemService = require('@servicos/ItemService');
const LogEstoqueService = require('@servicos/LogEstoqueService');
const LogPedidoService = require('@servicos/LogPedidoService');
const PagamentoService = require('@servicos/PagamentoService');
const PedidoService = require('@servicos/PedidoService');

(async ()=>{
    const check = await PedidoService.deletePedido(11);
    console.log(check)
})();