const ItemEstoqueService = require('./../Services/ItemEstoqueService');

class ItemEstoqueController {
    static async insertItemEstoque(req, res) {
        try {
            const { idItem, idEstoque, quantidade } = req.body;
            const newItem = await ItemEstoqueService.insertItemEstoque(idItem, idEstoque, quantidade);
            res.status(201).json({ success: true, data: newItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getAllItensEstoque(req, res) {
        try {
            const itensEstoque = await ItemEstoqueService.getAllItensEstoque();
            res.status(200).json({ success: true, data: itensEstoque });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getAllNomesItensEstoque(req, res) {
        try {
            const nomesItens = await ItemEstoqueService.getAllNomesItensEstoque();
            res.status(200).json({ success: true, data: nomesItens });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getIdNomeItemEstoque(req, res) {
        try {
            const { idItem } = req.params;
            const nomeItem = await ItemEstoqueService.getIdNomeItemEstoque(idItem);
            res.status(200).json({ success: true, data: nomeItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async updateItemEstoque(req, res) {
        try {
            const { idItem, idEstoque } = req.params;
            const { quantidade } = req.body;
            const updatedItem = await ItemEstoqueService.updateItemEstoque(idItem, idEstoque, quantidade);
            res.status(200).json({ success: true, data: updatedItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async deleteItemEstoque(req, res) {
        try {
            const { idItem, idEstoque } = req.params;
            const result = await ItemEstoqueService.deleteItemEstoque(idItem, idEstoque);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getItemEstoqueId(req, res) {
        try {
            const { idItem, idEstoque } = req.params;
            const itemEstoque = await ItemEstoqueService.getItemEstoqueId(idItem, idEstoque);
            res.status(200).json({ success: true, data: itemEstoque });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}
module.exports = ItemEstoqueController;