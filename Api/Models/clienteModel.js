const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade = new Entidade();
class ClienteModel{
    constructor(idCliente = null, nomeClinte = null, telefone = null,endereco=null ,email = null, senha = null){ 
        this.idCliente = idCliente;
        this.nomeCliente = nomeClinte;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
    }
    static async getTodosClientes(){
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
        const check = mappedEntidade(data, entidade.Cliente);
        console.log(check);
        return data;
    }    
    static async getId(id) {
        const sql = `SELECT * FROM tbCliente WHERE idCliente = (?);`; 
        return await queryExecute(sql,[id]);
    }
    async insertCliente() {
        const sql = `INSERT INTO tbCliente (nomeCliente, telefone, endereco, email, senha) 
                     VALUES ('${this.nomeCliente}', '${this.telefone}','${this.endereco}','${this.email}', '${this.senha}');`;
        return await queryExecute(sql);
    }
    async updateCliente(updadeIdCliente){
        if (!this.idCliente) throw new Error("ID do cliente é necessário para atualização.");

        const sql = `UPDATE TbCliente 
                     SET nomeCliente='${this.nomeCliente}', telefone='${this.telefone}', email='${this.email}', senha='${this.senha}'
                     WHERE idCliente=${updadeIdCliente};`;
        return await queryExecute(sql);
    }
}

(async () => {
    const check = await ClienteModel.getTodosClientes();
})();
module.exports = ClienteModel;