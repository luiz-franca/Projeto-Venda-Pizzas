const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade  = new Entidade();
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
        mappedEntidade(data, entidade.Admin);
        return data;
    }
    static async getIdAdmin(idParam){
        const sql = "SELECT * FROM tbAdmin WHERE idAdmin = (?);";
        const response = await queryExecute(sql,[idParam]);
        return response[0]
    }
    async insertAdmin(){
        const sql = `INSERT INTO tbAdmin( nomeAdmin, emailAdmin, loginAdmin, senhaAdmin) 
        VALUES (?,?,?,?);`;
        return await queryExecute(sql,[this.nomeAdmin,this.emailAdmin, this.loginAdmin, this.senhaAdmin])
    }
    async updateAdmin(updateIdAdmin){
        const sql = " CALL spUpDateAdmin(?,?,?,?,?);";
        const response = await queryExecute(sql, [
            updateIdAdmin,
            this.nomeAdmin,
            this.emailAdmin,
            this.loginAdmin,
            this.senhaAdmin
        ])
        console.log(response)
        return response;
    }
    static async deleteADmin(deleteIdAdmin){
        const sql = "DELETE FROM tbAdmin WHERE idAdmin = (?)"
        const response = await queryExecute(sql, [deleteIdAdmin])
        return response;
    }

}
module.exports = AdminModel;