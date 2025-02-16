require('dotenv').config({ path: '../.env' });
const PagamentoModel = require('./../Models/PagamentoModel');

class PagamentoService {
    static async getAllPagamentos() {
        try {
            return await PagamentoModel.getAllPagamento();
        } catch (error) {
            throw new Error("Erro ao buscar todos os pagamentos: " + error.message);
        }
    }

    static async getPagamentoId(idPagamento) {
        try {
            if (!idPagamento)throw new Error("ID do pagamento é obrigatório");
            return await PagamentoModel.getPagamentoNome(idPagamento);
        } catch (error) {
            throw new Error("Erro ao buscar pagamento por ID: " + error.message);
        }
    }

    static async insertPagamento(idPedido, valor, formaPagamento) {
        try {
            if (!idPedido || !valor || !formaPagamento) throw new Error("Todos os campos são obrigatórios");
            const newPagamento = new PagamentoModel(null, idPedido, valor, formaPagamento, null);
            return await newPagamento.insertPagamento();
        } catch (error) {
            throw new Error("Erro ao inserir pagamento: " + error.message);
        }
    }

    static async updatePagamento(idPagamento, idPedido, valor, formaPagamento) {
        try {
            if (!idPagamento || !idPedido || !valor || !formaPagamento) throw new Error("Todos os campos são obrigatórios");
            const pagamento = new PagamentoModel(null, idPedido, valor, formaPagamento, null);
            return await pagamento.updatePagamento(idPagamento);
        } catch (error) {
            throw new Error("Erro ao atualizar pagamento: " + error.message);
        }
    }

    static async deletePagamento(idPagamento) {
        try {
            if (!idPagamento) throw new Error("ID do pagamento é obrigatório");
            return await PagamentoModel.deletePagamento(idPagamento);
        } catch (error) {
            throw new Error("Erro ao deletar pagamento: " + error.message);
        }
    }
    static async getAllPagamentosStatusPedido(){
        try{
            return await PagamentoModel.getAllPagamentosStatusPedido();
        }catch(error){
            throw new Error(" Erro ao buscar todos os PagamentosStatus");
        }
    }
}

module.exports = PagamentoService;