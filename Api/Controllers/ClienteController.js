const ClienteService = require('./../Services/ClienteService');

class ClienteController {

    static async registerCliente(req, res) {
        try {
            const { nomeCliente, telefone, endereco, email } = req.body;
            const newCliente = await ClienteService.registerCliente(nomeCliente, telefone, endereco, email);
            res.status(201).json({ success: true, data: newCliente });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async getAllClientes(req, res) {
        try {
            const clientes = await ClienteService.getAllClientes();
            res.status(200).json({ success: true, data: clientes });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getClienteById(req, res) {
        try {
            const { id } = req.params;
            const cliente = await ClienteService.getClienteId(id);
            if (cliente === "IdCliente não contrado") {
                return res.status(404).json({ success: false, message: cliente });
            }
            res.status(200).json({ success: true, data: cliente });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async updateCliente(req, res) {
        try {
            const { id } = req.params;
            const { nome, telefone, endereco, email } = req.body;
            const updatedCliente = await ClienteService.updateCliente(id, nome, telefone, endereco, email);
            res.status(200).json({ success: true, data: updatedCliente });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async excluirCliente(req, res) {
        try {
            const { id } = req.params;
            const result = await ClienteService.excluirCliente(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

module.exports = ClienteController;