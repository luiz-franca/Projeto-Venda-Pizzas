const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade = new Entidade();
class ClienteModel{
    constructor(
        idCliente = null, 
        nomeCliente = null, 
        telefone = null,
        endereco=null ,
        email = null, 
        senha = null){  
        this.idCliente = idCliente;
        this.nomeCliente = nomeCliente;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
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
            senha: row.senha
        }))
        mappedEntidade(data, entidade.Cliente);
        return data;
    }    
    static async getIdCliente(idParam) {
        const sql = `SELECT * FROM tbCliente WHERE idCliente = (?);`; 
        const response  = await queryExecute(sql,[idParam]);
        return  response[0];
    }
    async insertCliente() {
        const sql = `INSERT INTO tbCliente (nomeCliente, telefone, endereco, email, senha) 
                     VALUES (?,?,?,?,?);`;                   
        return await queryExecute(sql,[this.nomeCliente, this.telefone, this.endereco, this.email, this.senha]);
    }
    async updateCliente(updateIdCliente) {
        const sql = "CALL spUpdateCliente(?,?,?,?,?,?);";
        const response = await queryExecute(sql, [
            updateIdCliente, 
            this.nomeCliente, 
            this.telefone, 
            this.endereco, 
            this.email, 
            this.senha
        ]);
        return response;
    }
    async deleteCliente(deleteIdCliente){
        const sql = "DELETE FROM tbCliente WHERE idCliente = (?) ;";
        const response = await queryExecute(sql,[deleteIdCliente])
        return response;
    }
}

(async () => {
    // const response = await ClienteModel.getTodosClientes();
    const response = await ClienteModel.getIdCliente(7)
    console.log(response)
})();
module.exports = ClienteModel;