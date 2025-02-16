const utilsService = require("@servicos/utils");
const LogEstoqueService = require("./../Services/LogEstoqueService");
class LogEstoqueController{
    static async getAllLogEstoque(req, res){
        try{
           const logEstoque = await LogEstoqueService.getAllLogsEstoque();
           res.status(200).json({success: true, data: logEstoque});
        }catch(error){
           res.status(400).json({succcess: false , message: error.message});
        }
    }
    static async insertLogEstoque(req, res){
        try{
            const {idAdmin, idEstoque, quantidadeAlterada} = req.body;
            const newLog = await LogEstoqueService.insertLogEstoque(idAdmin, idEstoque, quantidadeAlterada);
            res.status(200).json({success: true, data: newLog});
        }catch(error){
            res.status(400).json({sucess: false, message: error.message})
        }
    }
    static async getLogEstoqueIdLogEstoque(req, res) {
        try {
            const { id } = req.params;
            const logEstoque = await LogEstoqueService.getLogEstoqueIdLogEstoque(id);
            if(logEstoque === null){
                return res.status(404).json({success: false, message: "idLog não existe"})
            }
            res.status(200).json({ success: true, data: logEstoque });
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async getLogIdEstoque(req, res){
        try{
            const {idEstoque} = req.params;
            const logs = await LogEstoqueService.getLogEstoqueId(idEstoque);
            if(logs == null){
                return res.status(404).json({success: false, message: "Log Estoque não encontrado"});
            }
            res.status(200).json({success: true, data: logs});
        }catch(error){
            res.status(400).json({success: false, message: error.message});
        }
    }
    static async deleteLogEstoque(req, res){
        try{
            const {id} = req.params;
            const result = await LogEstoqueService.deleteLogEstoque(id);
            if(!result){
                res.status(404).json({success: false, message: "idLogEstoque não encontrado"});
            }
            res.status(200).json({succcess: true, data: result})
        }catch(error){
            res.status(400).json({success: false, message: "Log Estoque não encontrado"})
        }
    }
}

module.exports = LogEstoqueController;