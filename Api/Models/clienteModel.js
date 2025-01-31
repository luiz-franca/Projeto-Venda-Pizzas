const queryExecute = require('../Utils/queryExecute');

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
        return await queryExecute(sql);
    }
    static async getId(id) {
        const sql = `SELECT * FROM tbCliente WHERE idCliente = ${id};`; 
        return await queryExecute(sql);
    }
    async insertCliente() {
        const sql = `INSERT INTO tbCliente (nomeCliente, telefone, endereco, email, senha) 
                     VALUES ('${this.nomeCliente}', '${this.telefone}','${this.endereco}','${this.email}', '${this.senha}');`;
        return await queryExecute(sql);
    }
}
// (async () => {
//     try {
//         const novoCliente = new ClienteModel(null, 'Aslan Lilinho', 'telefone do papai', 'casa do papai','email@testew' ,'senhaPapaiSabe');
//         const check = await novoCliente.insertCliente(); // Adicionado await
//         console.log("Novo cliente inserido:", check);
//     } catch (error) {
//         console.error("Erro:", error.message);
//     }
// })();