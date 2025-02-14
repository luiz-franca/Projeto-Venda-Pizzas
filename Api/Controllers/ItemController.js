const ItemService = require('./../Services/ItemService');

class ItemController {
    static async getAllItems(req, res) {
        try {
            const items = await ItemService.getAllItems();
            res.status(200).json({ success: true, data: items });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    static async getItemById(req, res) {
        try {
            const { id } = req.params;
            const item = await ItemService.getItemId(id);
            res.status(200).json({ success: true, data: item });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async addItem(req, res) {
        try {
            const { nomeItem, precoItem, descricaoItem, imagemUrl } = req.body;
            const newItem = await ItemService.addItem(nomeItem, precoItem, descricaoItem, imagemUrl);
            res.status(201).json({ success: true, data: newItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async updateItem(req, res) {
        try {
            const { id } = req.params;
            const { nomeItem, precoItem, descricaoItem, imagemUrl } = req.body;
            const updatedItem = await ItemService.updateItem(id, nomeItem, precoItem, descricaoItem, imagemUrl);
            res.status(200).json({ success: true, data: updatedItem });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }

    static async deleteItem(req, res) {
        try {
            const { id } = req.params;
            const result = await ItemService.deleteItem(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = ItemController;