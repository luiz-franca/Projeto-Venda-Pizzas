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
    async updateCliente(updadeIdCliente){
        if (!this.idCliente) throw new Error("ID do cliente é necessário para atualização.");

        const sql = `UPDATE TbCliente 
                     SET nomeCliente='${this.nomeCliente}', telefone='${this.telefone}', email='${this.email}', senha='${this.senha}'
                     WHERE idCliente=${updadeIdCliente};`;
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
(async ()=>{
    try{
        const cliente = new ClienteModel(null, 'Gustavo', '20202020','casa', 'email@teste.com', 'prodasd');
        // const check = cliente.insertCliente();
        // const getcliente = await ClienteModel.getTodosClientes();
        // console.log(getcliente)
        cliente.nomeCliente = "Alsan";
        const check = await cliente.updateCliente(1)
        console.log(check)


    }catch(error){
        console.error(error)
    }
})();