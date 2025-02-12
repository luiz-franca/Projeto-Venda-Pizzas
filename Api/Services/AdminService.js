// const AdminModel = require('@models/utils');
const AdminModel = require('./../Models/AdminModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AdminService{
    static async loginAdmin(login, senha){
        if(!login || !senha){
            throw new Error("Login e Senha são Obrigatórios")
        }
        const checkAdmin = await AdminModel.findLogin(login);
        if(checkAdmin === null){
             return "usuário não encotrado";
        }
        const senhaValida = await bcrypt.compare(senha, checkAdmin.senhaAdmin);
        return senhaValida
        
    }
}
(async()=>{
    // const teste = await AdminService.loginAdmin('loign', 1);
    // console.log(teste);
})()
module.exports = AdminService;