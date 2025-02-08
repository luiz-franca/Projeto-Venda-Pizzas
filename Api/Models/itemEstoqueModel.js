const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const { mappedRowUtils, mappedEntidade } = require("./utils");

const entidade = new Entidade();
class ItemEstoqueModel {
    constructor(
        idItem = null,
        idEstoque = null,
        quantidade = null
    ) {
        this.idItem = idItem;
        this.idEstoque = idEstoque;
        this.quantidade = quantidade;
    }
    static async getAllItensEstoque() {
        const sql = "SELECT * FROM tbItemEstoque;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row => ({
            idItem: row.idItem,
            idEstoque: row.idEstoque,
            quantidade: row.quantidade
        }));
        // mappedEntidade(data, entidade.ItemEstoque); quebrou
        return data;
    }
    async insertItemEstoque() {
        const sql = `INSERT INTO tbItemEstoque (idItem, idEstoque, quantidade)
                     VALUES (?, ?, ?);`;
        const response = await queryExecute(sql, [this.idItem, this.idEstoque, this.quantidade]);
        return await response[0].affectedRows === 1? {"item adcionado": response[0]} : {"item não adicionado": response[0]} 
    }
    async updateItemEstoque(paramIdItem, paramIdEstoque) {
        const sql = `UPDATE tbItemEstoque 
                     SET quantidade = ?
                     WHERE idItem = ? AND idEstoque = ?;`;
        const response = await queryExecute(sql, [this.quantidade, paramIdItem, paramIdEstoque]);
        return response[0].affectedRows === 1?{"Update realizado": response[0]} : {"Updade falhou": response[0]};
    }
    static async deleteItemEstoque(idItem, idEstoque) {
        const sql = "DELETE FROM tbItemEstoque WHERE idItem = ? AND idEstoque = ?;";
        const response = await queryExecute(sql, [idItem, idEstoque]);
        return await response[0].affectedRows ===1? {"itemEstoque deletado": response[0]}: {"ação falhow": response[0]};
    }
    static async getItemEstoqueById(idItem, idEstoque) {
        const sql = `SELECT * FROM tbItemEstoque 
                     WHERE idItem = ? AND idEstoque = ?;`;
        const response = await queryExecute(sql, [idItem, idEstoque]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Item no estoque não encontrado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idItem: row.idItem,
            idEstoque: row.idEstoque,
            quantidade: row.quantidade
        }));
        return data;
    }
}
module.exports = ItemEstoqueModel;