require('dotenv').config({ path: '../.env' });
const ClienteModel = require('./../Models/ClienteModel');

class ClienteService{
    static async registerCliente(nomeCliente, telefone, endereco, email){
        try{
            if(!nomeCliente || !telefone || !endereco || !email) throw new Error("Todos os campos são obrigatório");
            const newCliente = await new ClienteModel(null,nomeCliente,telefone,endereco,email);
             return await newCliente.insertCliente();
        }catch(error){
            throw new Error("Erro ao registar novo cliente"+error);
        }
    }
    static async getClienteId(idCliente){
        try{
            if(!idCliente) throw new Error("IdCliente não encontrado");
            const cliente = await ClienteModel.getIdCliente(idCliente);
            return await cliente? cliente : "IdCliente não contrado";
        }catch(error){
            throw new Error("Erro ao pegar o idCliente"+error)
        }
    }
    static async updateCliente(idCliente, nome, telefone, endereco, email) {
        if (!idCliente) throw new Error("Idcliente não encontrada");
        const upCliente = await new ClienteModel(null, nome, telefone, endereco, email);
        return await upCliente.updateCliente(idCliente);
    }
    static async excluirCliente(idCliente){
        try{
            if(!idCliente) throw new Error("idCliente não encontrado "+error);
            const cliente = ClienteModel.deleteCliente(idCliente);
            return await cliente? "cliente excluido": "idcliente não encontrado";
        }catch(error){
            throw new Error("Erro ao deletar cliente "+error);
        }
    }
}
module.exports = ClienteService;