require('dotenv').config({ path: '../.env' });
const PedidoModel = require('./../Models/PedidoModel');

class PedidoService {
    static async getAllPedidos() {
        try {
            return await PedidoModel.getAllPedidos();
        } catch (error) {
            throw new Error("Erro ao buscar todos os pedidos: " + error.message);
        }
    }

    static async insertPedido(idClient, dataPedido, valorTotal, statusPedido, quantidade) {
        try {
            if (!idClient || !dataPedido || !valorTotal || !statusPedido || !quantidade) throw new Error("Todos os campos são obrigatórios");
            const newPedido = new PedidoModel(null, idClient, dataPedido, valorTotal, statusPedido, quantidade);
            return await newPedido.insertPedido();
        } catch (error) {
            throw new Error("Erro ao inserir pedido: " + error.message);
        }
    }

    static async updatePedido(idPedido, idClient, dataPedido, valorTotal, statusPedido, quantidade) {
        try {
            if (!idPedido || !idClient || !dataPedido || !valorTotal || !statusPedido || !quantidade) throw new Error("Todos os campos são obrigatórios");
            const pedido = new PedidoModel(null, idClient, dataPedido, valorTotal, statusPedido,quantidade);
            return await pedido.updatePedido(idPedido);
        } catch (error) {
            throw new Error("Erro ao atualizar pedido: " + error.message);
        }
    }

    static async deletePedido(idPedido) {
        try {
            if (!idPedido) throw new Error("ID do pedido é obrigatório");
            return await PedidoModel.deletePedido(idPedido);
        } catch (error) {
            throw new Error("Erro ao deletar pedido: " + error.message);
        }
    }

    static async getPedidosClienteId(idClient) {
        try {
            if (!idClient) throw new Error("ID do cliente é obrigatório");
            return await PedidoModel.getIdPedidosCliente(idClient);
        } catch (error) {
            throw new Error("Erro ao buscar pedidos por ID do cliente: " + error.message);
        }
    }
}

module.exports = PedidoService;