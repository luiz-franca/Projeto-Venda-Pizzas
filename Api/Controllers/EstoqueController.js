const EstoqueService = require('./../Services/EstoqueService');

class EstoqueController {

    static async insertInsumoEstoque(req, res) {
        try {
            const { nomeInsumo, quantidade } = req.body;
            const newInsumo = await EstoqueService.insertInsumoEstoque(nomeInsumo, quantidade);
            res.status(201).json({ success: true, data: newInsumo });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async getAllEstoque(req, res) {
        try {
            const estoque = await EstoqueService.getAllEstoque();
            res.status(200).json({ success: true, data: estoque });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async updateEstoque(req, res) {
        try {
            const { id } = req.params;
            const { nomeInsumo, quantidade } = req.body;
            const updatedInsumo = await EstoqueService.updateEstoque(id, nomeInsumo, quantidade);
            res.status(200).json({ success: true, data: updatedInsumo });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async getIdEstoque(req, res) {
        try {
            const { id } = req.params;
            const itemEstoque = await EstoqueService.getIdEstoque(id);

            if (itemEstoque === "Item do estoque não encontrado") {
                return res.status(404).json({ success: false, message: itemEstoque });
            }

            res.status(200).json({ success: true, data: itemEstoque });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async deleteEstoque(req, res) {
        try {
            const { id } = req.params;
            const result = await EstoqueService.deleteEstoque(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = EstoqueController;