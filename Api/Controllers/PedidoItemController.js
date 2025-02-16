const PedidoItemService = require('./../Services/PedidoItemService');

class PedidoItemController {
    static async getAllPedidoItens(req, res) {
        try {
            const pedidoItens = await PedidoItemService.getAllPedidoItens();
            res.status(200).json({ success: true, data: pedidoItens });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getAllPedidoItensNomes(req, res) {
        try {
            const pedidoItensNomes = await PedidoItemService.getAllPedidoItensNomes();
            res.status(200).json({ success: true, data: pedidoItensNomes });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getPedidoItemId(req, res) {
        try {
            const { id } = req.params;
            const pedidoItem = await PedidoItemService.getIdPedidoItem(id);
            res.status(200).json({ success: true, data: pedidoItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getPedidoItemNomeId(req, res) {
        try {
            const { id } = req.params;
            const pedidoItemNome = await PedidoItemService.getIdPedidoItemNomes(id);
            res.status(200).json({ success: true, data: pedidoItemNome });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async insertPedidoItem(req, res) {
        try {
            const { pedidoIdItem, itemId, quantidade, subtotal } = req.body;
            const newPedidoItem = await PedidoItemService.insertPedidoItem(pedidoIdItem, itemId, quantidade, subtotal);
            res.status(201).json({ success: true, data: newPedidoItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updatePedidoItem(req, res) {
        try {
            const { id } = req.params;
            const { pedidoIdItem, itemId, quantidade, subtotal } = req.body;
            const updatedPedidoItem = await PedidoItemService.updatePedidoItem(id, pedidoIdItem, itemId, quantidade, subtotal);
            res.status(200).json({ success: true, data: updatedPedidoItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deletePedidoItem(req, res) {
        try {
            const { id } = req.params;
            const result = await PedidoItemService.deletePedidoItem(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = PedidoItemController;