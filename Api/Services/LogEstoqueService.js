require('dotenv').config({ path: '../.env' });
const LogEstoqueModel = require('./../Models/LogEstoqueModel');

class LogEstoqueService {
    static async insertLogEstoque(idAdmin, idEstoque, quantidadeAlterada) {
        try {
            if (!idAdmin || !idEstoque || quantidadeAlterada === undefined) throw new Error("Todos os campos são obrigatórios");
            const newLogEstoque = new LogEstoqueModel(null, idAdmin, idEstoque, quantidadeAlterada, null);
            return await newLogEstoque.insertLogEstoque();
        } catch (error) {
            throw new Error("Erro ao inserir log de estoque: " + error.message);
        }
    }

    static async getAllLogsEstoque() {
        try {
            return await LogEstoqueModel.getAllLogsEstoque();
        } catch (error) {
            throw new Error("Erro ao buscar todos os logs de estoque: " + error.message);
        }
    }

    static async getLogEstoqueIdLogEstoque(idLogEstoque) {
        try {
            if (!idLogEstoque) throw new Error("ID do log de estoque é obrigatório");
            return await LogEstoqueModel.getLogEstoqueIdLogEstoque(idLogEstoque);
        } catch (error) {
            throw new Error("Erro ao buscar log de estoque por ID: " + error.message);
        }
    }

    static async deleteLogEstoque(idLogEstoque) {
        try {
            if (!idLogEstoque) throw new Error("ID do log de estoque é obrigatório");
            return await LogEstoqueModel.deleteLogEstoque(idLogEstoque);
        } catch (error) {
            throw new Error("Erro ao deletar log de estoque: " + error.message);
        }
    }

    static async getLogEstoqueId(idEstoque) {
        try {
            if (!idEstoque) throw new Error("ID do estoque é obrigatório");
            return await LogEstoqueModel.getLogEstoqueId(idEstoque);
        } catch (error) {
            throw new Error("Erro ao buscar logs por ID do estoque: " + error.message);
        }
    }
}

module.exports = LogEstoqueService;