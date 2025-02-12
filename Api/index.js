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

(async()=>{
    const resposta  = await AdminService.loginAdmin("gustavo","gg@gg"); // como passar a senha aqui?
    console.log(resposta)
    // const novoAdmin = await  new AdminModel(null,"gustavo","gg@gg", "loguser","1234" ).insertAdmin();
    // console.log(novoAdmin);

})();