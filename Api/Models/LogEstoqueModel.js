const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');

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
        return data;
    }

    async insertLogEstoque() {
        const sql = `INSERT INTO tbLogEstoque (idAdmin, idEstoque, quantidadeAlterada)
                     VALUES (?, ?, ?);`;
        const response = await queryExecute(sql, [this.idAdmin, this.idEstoque, this.quantidadeAlterada]);
        return response[0].affectedRows === 1 ? "log adicionado":  "log não adicionado";
    }

    static async getLogEstoqueIdLogEstoque(idLogEstoque) {
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

    static async getLogEstoqueId(idEstoque) {
        const sql = `SELECT tA.nomeAdmin,
                    tE.nomeInsumo,
                    tE.quantidade,
                    tLE.quantidadeAlterada  FROM tbLogEstoque tLE
                    INNER JOIN tbAdmin tA ON tLE.idAdmin = tA.idAdmin
                    INNER JOIN tbEstoque tE ON tLE.idEstoque = tE.idEstoque
                    WHERE tE.idEstoque= ?`;
        const response = await queryExecute(sql, [idEstoque]);
        const rows = response[0];
        if (rows.length === 0) {
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            nomeAdmin: row.nomeAdmin,
            nomeInsumo: row.nomeInsumo,
            quantidade: row.quantidade,
            quantidadeAlterada: row.quantidadeAlterada
        }));
        return !data.length === 0? null: data;
    }
}
module.exports = LogEstoqueModel;