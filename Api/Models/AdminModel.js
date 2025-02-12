const bcrypt = require('bcrypt');
const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');


class AdminModel{
    constructor(
        idAdmin = null,
        nomeAdmin = null,
        emailAdmin = null,
        loginAdmin = null,
        senhaAdmin = null
    ){
        this.idAdmin = idAdmin;
        this.nomeAdmin = nomeAdmin;
        this.emailAdmin = emailAdmin;
        this.loginAdmin = loginAdmin;
        this.senhaAdmin = senhaAdmin;
    }
    static async getAllAdmin(){
        const sql = "SELECT * FROM tbAdmin;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows,row =>({
            idAdmin: row.idAdmin,
            nomeAdmin: row.nomeAdmin,
            emailAdmin: row.emailAdmin,
            senhaAdmin: row.senhaAdmin
        }))
        return data;
    }
    static async getIdAdmin(idParam){
        const sql = "SELECT * FROM tbAdmin WHERE idAdmin = (?);";
        const response = await queryExecute(sql,[idParam]);
        return response[0]
    }
    async insertAdmin(){
        const hashSenha = await bcrypt.hash(this.senhaAdmin,10);
        const sql = `INSERT INTO tbAdmin( nomeAdmin, emailAdmin, loginAdmin, senhaAdmin) 
        VALUES (?,?,?,?);`;
        return await queryExecute(sql,[
            this.nomeAdmin,
            this.emailAdmin, 
            this.loginAdmin, 
            hashSenha
        ])
    }
    async updateAdmin(updateIdAdmin){
        const hashSenha = await bcrypt.hash(this.senhaAdmin,10)
        const sql = " CALL spUpDateAdmin(?,?,?,?,?);";
        const response = await queryExecute(sql, [
            updateIdAdmin,
            this.nomeAdmin,
            this.emailAdmin,
            this.loginAdmin,
            hashSenha
        ])
        return response[0];
    }
    static async deleteAdmin(deleteIdAdmin){
        const sql = "DELETE FROM tbAdmin WHERE idAdmin = (?)"
        const response = await queryExecute(sql, [deleteIdAdmin])
        return response[0].affectedRows === 1? "admin deletado": "admin não deletado";
    }
    static async findLogin(loginAdmin) {
        const sql = "SELECT * FROM tbAdmin WHERE loginAdmin = ? LIMIT 1;";
        const response = await queryExecute(sql, [loginAdmin]);
        return response[0].length === 0? null : response[0] ;
    }
    

}
module.exports = AdminModel;