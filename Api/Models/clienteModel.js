const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade = new Entidade();
class ClienteModel{
    constructor(idCliente = null, nomeCliente = null, telefone = null,endereco=null ,email = null, senha = null){ 
        this.idCliente = idCliente;
        this.nomeCliente = nomeCliente;
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
        return data;
    }    
    static async getIdCliente(id) {
        const sql = `SELECT * FROM tbCliente WHERE idCliente = (?);`; 
        const response  = await queryExecute(sql,[id]);
        return  response[0];
    }
    async insertCliente() {
        // precisa ter uma rotina para verficiar se ja existe para não causar redundancia
        const sql = `INSERT INTO tbCliente (nomeCliente, telefone, endereco, email, senha) 
                     VALUES (?,?,?,?,?);`;                   
        return await queryExecute(sql,[this.nomeCliente, this.telefone, this.endereco, this.email, this.senha]);
    }
    async updateCliente(updadeIdCliente){
        if (!this.idCliente) throw new Error("ID do cliente é necessário para atualização.");

        const sql = `UPDATE TbCliente 
                     SET nomeCliente=?, telefone=?, email=?, senha=?
                     WHERE idCliente=?;`;
        return await queryExecute(sql,[this.nomeCliente, this.telefone, this.email, this.senha, updadeIdCliente]);
    }
}

(async () => {
    const response = await ClienteModel.updadeIdCliente;
    console.log(response[0])
})();
module.exports = ClienteModel;