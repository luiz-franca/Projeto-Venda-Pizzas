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
    const updateData = {
        nomeAdmin: "Novo Nome",
        emailAdmin: "novoemail@example.com",
        loginAdmin: "novologin",
        senhaAdmin: "novasenha"
    };
    const  resposta = await AdminService.deleteAdmin(11);
    // const resposta  = await AdminService.createAdmin("Aslan","lilhinh@gmail.com","lilhim","tetetotoso"); // como passar a senha aqui?
    console.log(resposta)
    // const novoAdmin = await  new AdminModel(null,"gustavo","gg@gg", "loguser","1234" ).insertAdmin();
    // console.log(novoAdmin);

})();