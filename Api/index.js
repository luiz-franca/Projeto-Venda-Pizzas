const checkdote = require('dotenv')
require('./aliases');
const dbconnect = require('@configs/dbconnect')
const ClasseAdmin = require('@entidades/ClasseAdmin');
const AdminModel = require('@models/AdminModel');
const ClienteModel = require('@models/ClienteModel');
const EstoqueModel = require('@models/EstoqueModel');
const ItemEstoqueModel = require('@models/ItemEstoqueModel');
const Item = require('@models/ItemModel');
const AdminController = require('@controllers/utils');
const AdminService = require('@servicos/AdminService')
