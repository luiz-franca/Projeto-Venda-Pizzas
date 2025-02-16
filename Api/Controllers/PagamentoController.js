const PagamentoService = require('./../Services/PagamentoService');

class PagamentoController {
    static async getAllPagamentos(req, res) {
        try {
            const pagamentos = await PagamentoService.getAllPagamentos();
            res.status(200).json({ success: true, data: pagamentos });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
    static async getPagamentoId(req, res) {
        try {
            const { id } = req.params;
            const pagamento = await PagamentoService.getPagamentoId(id);
            res.status(200).json({ success: true, data: pagamento });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async insertPagamento(req, res) {
        try {
            const { idPedido, valor, formaPagamento } = req.body;
            const newPagamento = await PagamentoService.insertPagamento(idPedido, valor, formaPagamento);
            res.status(201).json({ success: true, data: newPagamento });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async updatePagamento(req, res) {
        try {
            const { id } = req.params;
            const { idPedido, valor, formaPagamento } = req.body;
            const updatedPagamento = await PagamentoService.updatePagamento(id, idPedido, valor, formaPagamento);
            res.status(200).json({ success: true, data: updatedPagamento });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async deletePagamento(req, res) {
        try {
            const { id } = req.params;
            const result = await PagamentoService.deletePagamento(id);
            res.status(200).json({ success: true, message: result });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async getAllPagamentosStatusPedido(req, res){
        try{
            const pagamentosStatusPedido = await PagamentoService.getAllPagamentosStatusPedido();
            res.status(200).json({success: true, message: pagamentosStatusPedido});
        }catch(error){
            res.status(400).json({success: false, message: error.message})
        }
    }
}

module.exports = PagamentoController;