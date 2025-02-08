const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const { mappedRowUtils, mappedEntidade } = require("./utils");

const entidade = new Entidade();
class LogEstoqueModel {
    constructor(
        idLogEstoque = null,
        idAdmin = null,
        idEstoque = null,
        quantidadeAlterada = null,
        dataAlteracao = null
    ) {
        this.idLogEstoque = idLogEstoque;
        this.idAdmin = idAdmin;
        this.idEstoque = idEstoque;
        this.quantidadeAlterada = quantidadeAlterada;
        this.dataAlteracao = dataAlteracao;
    }

    static async getAllLogsEstoque() {
        const sql = "SELECT * FROM tbLogEstoque;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row => ({
            idLogEstoque: row.idLogEstoque,
            idAdmin: row.idAdmin,
            idEstoque: row.idEstoque,
            quantidadeAlterada: row.quantidadeAlterada,
            dataAlteracao: row.dataAlteracao
        }));
        // mappedEntidade(data, entidade.LogEstoque); // Descomente se necessário
        return data;
    }

    async insertLogEstoque() {
        const sql = `INSERT INTO tbLogEstoque (idAdmin, idEstoque, quantidadeAlterada)
                     VALUES (?, ?, ?);`;
        const response = await queryExecute(sql, [this.idAdmin, this.idEstoque, this.quantidadeAlterada]);
        return response[0].affectedRows === 1 ? { "log adicionado": response[0] } : { "log não adicionado": response[0] };
    }

    static async getLogEstoqueById(idLogEstoque) {
        const sql = `SELECT * FROM tbLogEstoque 
                     WHERE idLogEstoque = ?;`;
        const response = await queryExecute(sql, [idLogEstoque]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Log de estoque não encontrado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idLogEstoque: row.idLogEstoque,
            idAdmin: row.idAdmin,
            idEstoque: row.idEstoque,
            quantidadeAlterada: row.quantidadeAlterada,
            dataAlteracao: row.dataAlteracao
        }));
        return data;
    }

    static async deleteLogEstoque(idLogEstoque) {
        const sql = "DELETE FROM tbLogEstoque WHERE idLogEstoque = ?;";
        const response = await queryExecute(sql, [idLogEstoque]);
        return response[0].affectedRows === 1 ? { "log deletado": response[0] } : { "ação falhou": response[0] };
    }

    static async getLogsByEstoqueId(idEstoque) {
        const sql = `SELECT * FROM tbLogEstoque 
                     WHERE idEstoque = ?;`;
        const response = await queryExecute(sql, [idEstoque]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Nenhum log encontrado para o estoque especificado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idLogEstoque: row.idLogEstoque,
            idAdmin: row.idAdmin,
            idEstoque: row.idEstoque,
            quantidadeAlterada: row.quantidadeAlterada,
            dataAlteracao: row.dataAlteracao
        }));
        return {"Estoque Id sucess": data};
    }

    static async getLogsByAdminId(idAdmin) {
        const sql = `SELECT * FROM tbLogEstoque 
                     WHERE idAdmin = ?;`;
        const response = await queryExecute(sql, [idAdmin]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Nenhum log encontrado para o admin especificado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idLogEstoque: row.idLogEstoque,
            idAdmin: row.idAdmin,
            idEstoque: row.idEstoque,
            quantidadeAlterada: row.quantidadeAlterada,
            dataAlteracao: row.dataAlteracao
        }));
        return {"getAdmin sucess": data};
    }
}
module.exports = LogEstoqueModel;