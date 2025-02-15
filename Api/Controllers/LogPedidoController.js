const LogPedidoService = require('./../Services/LogPedidoService');

class LogPedidoController {
    static async insertLogPedido(req, res) {
        try {
            const { idAdmin, idPedido, statusAlteradoPara } = req.body;
            const newLog = await LogPedidoService.insertLogPedido(idAdmin, idPedido, statusAlteradoPara);
            res.status(201).json({ success: true, data: newLog });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getAllLogsPedido(req, res) {
        try {
            const logs = await LogPedidoService.getAllLogsPedido();
            res.status(200).json({ success: true, data: logs });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getLogPedidoById(req, res) {
        try {
            const { id } = req.params;
            const log = await LogPedidoService.getLogPedidoId(id);
            res.status(200).json({ success: true, data: log });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async deleteLogPedido(req, res) {
        try {
            const { id } = req.params;
            const result = await LogPedidoService.deleteLogPedido(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getLogsPedidoByIdAdmin(req, res) {
        try {
            const { idAdmin } = req.params;
            const logs = await LogPedidoService.getLogsAdminId(idAdmin);
            res.status(200).json({ success: true, data: logs });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getLogsPedidoByIdPedido(req, res) {
        try {
            const { idPedido } = req.params;
            const logs = await LogPedidoService.getLogsPedidoId(idPedido);
            res.status(200).json({ success: true, data: logs });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = LogPedidoController;