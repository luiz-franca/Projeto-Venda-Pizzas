require('dotenv').config({ path: '../.env' });
const PedidoItemModel = require('./../Models/PedidoItemModel');

class PedidoItemService {
    static async getAllPedidoItens() {
        try {
            return await PedidoItemModel.getAllPedidoItem();
        } catch (error) {
            throw new Error("Erro ao buscar todos os itens de pedido: " + error.message);
        }
    }

    static async getAllPedidoItensNomes() {
        try {
            return await PedidoItemModel.getAllPedidoItemNomes();
        } catch (error) {
            throw new Error("Erro ao buscar todos os itens de pedido com nomes: " + error.message);
        }
    }

    static async getIdPedidoItem(idPedidoItem) {
        try {
            if (!idPedidoItem) throw new Error("ID do item de pedido é obrigatório");
            return await PedidoItemModel.getIdPedidoItem(idPedidoItem);
        } catch (error) {
            throw new Error("Erro ao buscar item de pedido por ID: " + error.message);
        }
    }

    static async getIdPedidoItemNomes(idPedidoItem) {
        try {
            if (!idPedidoItem) throw new Error("ID do item de pedido é obrigatório");
            return await PedidoItemModel.getIdPedidoItemNome(idPedidoItem);
        } catch (error) {
            throw new Error("Erro ao buscar item de pedido com nome por ID: " + error.message);
        }
    }

    static async insertPedidoItem(pedidoIdItem, itemId, quantidade, subtotal) {
        try {
            if (!pedidoIdItem || !itemId || !quantidade || !subtotal) throw new Error("Todos os campos são obrigatórios");
            const newPedidoItem = new PedidoItemModel(null, pedidoIdItem, itemId, quantidade, subtotal);
            return await newPedidoItem.insertPedidoItem();
        } catch (error) {
            throw new Error("Erro ao inserir item de pedido: " + error.message);
        }
    }

    static async updatePedidoItem(idPedidoItem, pedidoIdItem, itemId, quantidade, subtotal) {
        try {
            if (!idPedidoItem || !pedidoIdItem || !itemId || !quantidade || !subtotal) throw new Error("Todos os campos são obrigatórios");
            const pedidoItem = new PedidoItemModel(null, pedidoIdItem, itemId, quantidade, subtotal);
            return await pedidoItem.updatePedidoItem(idPedidoItem);
        } catch (error) {
            throw new Error("Erro ao atualizar item de pedido: " + error.message);
        }
    }

    static async deletePedidoItem(idPedidoItem) {
        try {
            if (!idPedidoItem) throw new Error("ID do item de pedido é obrigatório");
            return await PedidoItemModel.deletePedidoItem(idPedidoItem);
        } catch (error) {
            throw new Error("Erro ao deletar item de pedido: " + error.message);
        }
    }
}

module.exports = PedidoItemService;