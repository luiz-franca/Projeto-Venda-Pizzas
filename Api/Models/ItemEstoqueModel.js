const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');

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
        return data;
    }
    static async getAllNomesItensEstoque(){
        const sql = `SELECT tI.nomeItem, tI.descricaoItem, tI.imagemUrl, tI.precoItem FROM tbItemEstoque tIe
                    INNER JOIN tbItem tI ON tIe.idItem = tI.idItem
                    INNER JOIN tbEstoque tE ON tIe.idEstoque = tE.idEstoque;`;
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row =>({
            nomeItem: row.nomeItem,
            descricaoItem: row.descricaoItem,
            imagemUrl: row.imagemUrl,
            precoItem: row.precoItem
        }))
        return data;
        
    }
    static async getIdNomeItemEstoque(idItem){
        const sql = `SELECT tI.nomeItem, tI.descricaoItem, tI.imagemUrl, tI.precoItem FROM tbItemEstoque tIe
                    INNER JOIN tbItem tI ON tIe.idItem = tI.idItem
                    INNER JOIN tbEstoque tE ON tIe.idEstoque = tE.idEstoque WHERE tIe.idItem = (?);`;
        const response = await queryExecute(sql,[idItem]);
        const rows = response[0];
        const data = mappedRowUtils(rows, row=>({
            nomeItem: row.nomeItem,
            descricaoItem: row.descricaoItem,
            imagemUrl: row.imagemUrl,
            precoItem: row.precoItem
        }))
        return data.length === 0? "idItem não existe": data[0];
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
        return response[0].affectedRows === 1? "Update realizado" : "Updade falhou";
    }
    static async deleteItemEstoque(idItem, idEstoque) {
        const sql = "DELETE FROM tbItemEstoque WHERE idItem = ? AND idEstoque = ?;";
        const response = await queryExecute(sql, [idItem, idEstoque]);
        return await response[0].affectedRows ===1? response[0]: "ação falhou";
    }
    static async getItemEstoqueId(idItem, idEstoque) {
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