require('dotenv').config({path: '../.env'});
// const AdminModel = require('@models/utils');
const {JWTSECRET, TOKENEXPIRATION} = process.env
const AdminModel = require('./../Models/AdminModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AdminService{
    static async loginAdmin(loginAdmin, senhaAdmin){
        if(!loginAdmin || !senhaAdmin){
            throw new Error("Login e Senha são Obrigatórios")
        }
        const checkAdmin = await AdminModel.findLogin(loginAdmin);
        if(checkAdmin === null){
             return "usuário não encotrado";
        }
        const senhaValida = await bcrypt.compare(senhaAdmin, checkAdmin[0].senhaAdmin)
        console.log("checando ",checkAdmin[0].senhaAdmin, " ==", senhaAdmin)
        
        return senhaValida
    }
}
module.exports = AdminService;