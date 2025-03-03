require('dotenv').config({path: '../.env'});
// const AdminModel = require('@models/utils');
const {JWTSECRET, TOKENEXPIRATION} = process.env
const AdminModel = require('./../Models/AdminModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AdminService{
    static async getAllAdmins(){
        try{    
            return await AdminModel.getAllAdmin();
        }catch(error){
            throw new Error("Erro ao buscar administradores")
        }
    }
    static async getAdminId(idAmin){
        try{
            return await AdminModel.getIdAdmin(idAmin);
        }catch(error){
            throw new Error("Erro ao obter o idAmin");
        }
    }
    static async createAdmin({ nomeAdmin, emailAdmin, loginAdmin, senhaAdmin }) {
        try {
            if (!nomeAdmin || !emailAdmin || !loginAdmin || !senhaAdmin) {
                throw new Error("Todos os campos são obrigatórios");
            }

            const newAdmin = new AdminModel(null, nomeAdmin, emailAdmin, loginAdmin, senhaAdmin);
            return await newAdmin.insertAdmin();
        } catch (error) {
            throw new Error("Erro ao criar administrador: " + error.message);
        }
    }
    static async updateAdmin(idAdmin, updateData){
        try{
            if(!idAdmin) throw new Error("idAdmin é obrigatório");
            const admin = new AdminModel(
                idAdmin,
                updateData.nomeAdmin,
                updateData.emailAdmin,
                updateData.loginAdmin,
                updateData.senhaAdmin
            );
            return await admin.updateAdmin(idAdmin);
        }catch(error){
            throw new Error("Erro ao atualizar administrador: " + error.message);
        }
    }
    static async deleteAdmin(idAdmin){
        try{
            if(!idAdmin) throw new Error("IdAdmin é obrigatório");
            return await AdminModel.deleteAdmin(idAdmin);
        }catch(error){
            throw new Error("Erro ao deletar administrador" + error.message);
        }
    }
    static async loginAdmin(loginAdmin, senhaAdmin){
        try{
            if(!loginAdmin || !senhaAdmin){
                throw new Error("Login e Senha são Obrigatórios")
            }
            const checkAdmin = await AdminModel.findLogin(loginAdmin);
            if(checkAdmin === null){
                 return "usuário não encontrado";
            }
            const senhaValida = await bcrypt.compare(senhaAdmin, checkAdmin[0].senhaAdmin)
            if(!senhaValida){
                throw new Error('erro senha');
            }
            const token = jwt.sign(
                {id: checkAdmin.idAmin, 
                login: checkAdmin.loginAdmin
                }, process.env.JWT_SECRET,
                {expiresIn: process.env.TOKEN_EXPIRATION || "1h"
                })  
            return {token,checkAdmin}
        }catch(error){
            console.error(error);
        }
    }
}
module.exports = AdminService;