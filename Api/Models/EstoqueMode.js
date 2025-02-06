const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade = new Entidade();
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
        mappedEntidade(data, entidade.Estoque);
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
        return await queryExecute(sql,[this.nomeInsumo, this.quantidade])
    }
    // escrever uma procedure, para fazer isso. CODIGO LIMPO!
    async updateEstoque(idEstoque){
        const sql = `CALL spInsertEstoque(?, ?,?) ;`;
        const response = await queryExecute(sql, [idEstoque, this.nomeInsumo,this.quantidade]);
        return await response[0];
    }
    static async deleteEstoque(idParam){
        const sql = `DELETE FROM tbEstoque WHERE idEstoque = (?);`;
        const response = await queryExecute(sql, [idParam]);
        return response[0].affectedRows === 1? `isumoDeletado ${response}`:"idEstoque não encontrado" ;
    }   

}
module.exports = EstoqueModel;