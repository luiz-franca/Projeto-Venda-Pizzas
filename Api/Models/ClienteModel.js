const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');

class ClienteModel{
    constructor(
        idCliente = null, 
        nomeCliente = null, 
        telefone = null,
        endereco=null ,
        email = null){  
        this.idCliente = idCliente;
        this.nomeCliente = nomeCliente;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
    }
    static async getAllClientes(){
        const sql = "SELECT * FROM tbCliente;"; 
        const response = await queryExecute(sql);
        const rows = response[0]
        const data = mappedRowUtils(rows, row =>({
            idCliente: row.idCliente,
            nomeCliente: row.nomeCliente,
            telefone: row.telefone,
            endereco: row.endereco,
            email: row.email,
        }))
        return data;
    }    
    static async getIdCliente(idParam) {
        const sql = `SELECT * FROM tbCliente WHERE idCliente = (?);`; 
        const response  = await queryExecute(sql,[idParam]);
        return  response[0];
    }
    async findLogin(nomeCliente) {
        const sql = "SELECT * FROM tbCliente WHERE nomeCliente = ? LIMIT 1;";
        const response = await queryExecute(sql, [nomeCliente]);
        return response[0].length === 0? null : response[0] ;
    }
    async insertCliente() {
        const sql = `INSERT INTO tbCliente (nomeCliente, telefone, endereco, email) 
                     VALUES (?,?,?,?);`;
        const response  = await  queryExecute(sql,[this.nomeCliente, this.telefone, this.endereco, this.email]);
        const cliente = await this.findLogin(this.nomeCliente);
        return await response[0].affectedRows === 1? ["Cliente adicionado",cliente]: "Erro ao adicionar cliente";
    }
    async updateCliente(updateIdCliente) {
        const sql = "CALL spUpdateCliente(?,?,?,?,?);";
        const response = await queryExecute(sql, [
            updateIdCliente, 
            this.nomeCliente, 
            this.telefone, 
            this.endereco, 
            this.email, 
        ]);
        return response[0];
    }
    static async deleteCliente(deleteIdCliente){
        const sql = "DELETE FROM tbCliente WHERE idCliente = (?) ;";
        const response = await queryExecute(sql,[deleteIdCliente])
        return response;
    }
}
module.exports = ClienteModel;