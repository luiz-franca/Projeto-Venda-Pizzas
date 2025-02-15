const PedidoService = require('./../Services/PedidoService');

class PedidoController {
    static async getAllPedidos(req, res) {
        try {
            const pedidos = await PedidoService.getAllPedidos();
            res.status(200).json({ success: true, data: pedidos });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async insertPedido(req, res) {
        try {
            const { idClient, dataPedido, valorTotal, statusPedido } = req.body;
            const newPedido = await PedidoService.insertPedido(idClient, dataPedido, valorTotal, statusPedido);
            res.status(201).json({ success: true, data: newPedido });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updatePedido(req, res) {
        try {
            const { id } = req.params;
            const { idClient, dataPedido, valorTotal, statusPedido } = req.body;
            const updatedPedido = await PedidoService.updatePedido(id, idClient, dataPedido, valorTotal, statusPedido);
            res.status(200).json({ success: true, data: updatedPedido });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deletePedido(req, res) {
        try {
            const { id } = req.params;
            const result = await PedidoService.deletePedido(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async getPedidosClienteId(req, res) {
        try {
            const { idClient } = req.params;
            const pedidos = await PedidoService.getPedidosClienteId(idClient);
            if(pedidos.length === 0){
                res.status(404).json({success: false, message: "idClient não encotrado"})
            }
            res.status(200).json({ success: true, data: pedidos });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = PedidoController;