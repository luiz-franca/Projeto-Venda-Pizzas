const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');

class EstoqueModel{
    constructor(idEstoque=null, nomeInsumo=null, quantidade=null){
        this.idEstoque = idEstoque;
        this.nomeInsumo = nomeInsumo;
        this.quantidade = quantidade;
    }
    static async getAllEstoque(){
        const sql = `SELECT * FROM tbEstoque`;
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row =>({
            idEstoque: row.idEstoque,
            nomeInsumo: row.nomeInsumo,
            quantidade: row.quantidade
        }))
        return data;
    }
    static async getIdEstoque(idParam){
        const sql = `SELECT * FROM tbEstoque WHERE idEstoque=(?);`;
        const response = await queryExecute(sql,[idParam])
        const rows = response[0]
        if(rows.length === 0){
            console.log('id Estoque não existe')
        }
        const data = mappedRowUtils(rows, row =>({
            idEstoque: row.idEstoque,
            nomeInsumo: row.nomeInsumo,
            quantidade: row.quantidade
        }))
        return data;
    }
    // fazer uma trigger para não deixar adicionar produtos repetidos
    async insertInsumoEstoque(){
        const sql = `INSERT INTO tbEstoque (nomeInsumo,quantidade)
                     VALUES(?,?);`;
        const response = await queryExecute(sql,[this.nomeInsumo, this.quantidade])
        return response[0].affectedRows === 1? "item adicionado ao estoque": "erro ao adicionar o item"
    }
    // escrever uma procedure, para fazer isso. CODIGO LIMPO!
    // não é um insert é um update
    async updateEstoque(idEstoque){
        const sql = `CALL spUpdateEstoque(?, ?,?) ;`;
        const response = await queryExecute(sql, [idEstoque, this.nomeInsumo,this.quantidade]);
        return await response[0];
    }
    static async deleteEstoque(idParam){
        const sql = `DELETE FROM tbEstoque WHERE idEstoque = (?);`;
        const response = await queryExecute(sql, [idParam]);
        return response[0].affectedRows === 1? "insumo deletado":"idEstoque não encontrado" ;
    }   

}
module.exports = EstoqueModel;