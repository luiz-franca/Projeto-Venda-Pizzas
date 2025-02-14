const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');


class PagamentoModel{
    constructor(
        idPagamento = null,
        idPedido = null,
        valor = null,
        formaPagamento = null,
        dataPagamento = null
    ){
        this.idPagamento = idPagamento;
        this.idPedido = idPedido;
        this.valor = valor;
        this.formaPagamento = formaPagamento;
        this.dataPagamento = dataPagamento;
    }
    static async getAllPagamento(){
        const sql = "SELECT * FROM tbPagamento;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row=>({
            idPagamento: row.idPagamento,
            idPedido: row.idPedido,
            valor: row.valor,
            formaPagamento: row.formaPagamento,
            dataPagamento: row.dataPagametno
        }))
        return response[0].length === 0? {"Não existe pagamentos": response[0]}: {"Pagamentos": response[0]}

    }
    static async getPagamentoNome(paramId){
        const sql  = `SELECT * FROM tbPagamento tP WHERE tP.idPagamento = (?);
                        `;
        const response = await queryExecute(sql,[paramId]);
        const rows = response[0];
        if(rows.length === 0){
            return {"idPagamento não existe": rows}
        }
        return rows;     
    }
    async insertPagamento() {
        const sql = `CALL spInsertTbPagamento(?,?,?);`;
        const response = await queryExecute(sql, [
            this.idPedido,
            this.valor,
            this.formaPagamento
        ]);
        return await response.length === 2? {"Insert Response": response[0][0]}: {"Insert Erro": response};
    }
    async updatePagamento(idPagamentoParam){
        const sql = "CALL spUpdatePagamento(?,?,?,?);";
        const response = await queryExecute(sql,[idPagamentoParam,this.idPedido, this.valor, this.formaPagamento]);
        return response[0];
    }
    static async deletePagamento(idPagamentoParam){
        const sql = "DELETE FROM tbPagamento WHERE idPagamento = (?);";
        const response = (await queryExecute(sql,[idPagamentoParam]));
        return response[0].affectedRows === 1? {"delete sucesso": response[0]}: {"Erro ao deletar": response[0]}
    }
}
module.exports = PagamentoModel;