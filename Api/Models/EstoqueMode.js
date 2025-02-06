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
        const sql = `UPDATE`
    }

}
(async()=>{
    const insumo = new EstoqueModel(null,"Molho de Alho",100).updateEstoque(1);
    
})();