require('dotenv').config({ path: '../.env' });
const LogPedidoModel = require('./../Models/LogPedidoModel');

class LogPedidoService {
    static async insertLogPedido(idAdmin, idPedido, statusAlteradoPara) {
        try {
            if (!idAdmin || !idPedido || !statusAlteradoPara) throw new Error("Todos os campos são obrigatórios");
            const newLogPedido = new LogPedidoModel(null, idAdmin, idPedido, statusAlteradoPara, null);
            return await newLogPedido.insertLogPedido();
        } catch (error) {
            throw new Error("Erro ao inserir log de pedido: " + error.message);
        }
    }

    static async getAllLogsPedido() {
        try {
            return await LogPedidoModel.getAllLogsPedido();
        } catch (error) {
            throw new Error("Erro ao buscar todos os logs de pedido: " + error.message);
        }
    }

    static async getLogPedidoId(idLogPedido) {
        try {
            if (!idLogPedido) throw new Error("ID do log de pedido é obrigatório");
            return await LogPedidoModel.getLogPedidoId(idLogPedido);
        } catch (error) {
            throw new Error("Erro ao buscar log de pedido por ID: " + error.message);
        }
    }

    static async deleteLogPedido(idLogPedido) {
        try {
            if (!idLogPedido) throw new Error("ID do log de pedido é obrigatório");
            return await LogPedidoModel.deleteLogPedido(idLogPedido);
        } catch (error) {
            throw new Error("Erro ao deletar log de pedido: " + error.message);
        }
    }

    static async getLogsAdminId(idAdmin) {
        try {
            if (!idAdmin) throw new Error("ID do admin é obrigatório");
            return await LogPedidoModel.getLogsAdminId(idAdmin);
        } catch (error) {
            throw new Error("Erro ao buscar logs por ID do admin: " + error.message);
        }
    }

    static async getLogsPedidoId(idPedido) {
        try {
            if (!idPedido) throw new Error("ID do pedido é obrigatório");
            return await LogPedidoModel.getLogsPedidoId(idPedido);
        } catch (error) {
            throw new Error("Erro ao buscar logs por ID do pedido: " + error.message);
        }
    }
}

module.exports = LogPedidoService;