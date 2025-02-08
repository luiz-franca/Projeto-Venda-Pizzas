const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");


const entidade = new Entidade();
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
        mappedEntidade(data, entidade.Pagamento);
        return data;

    }
    static async getAllPagamentoNome(paramId){
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
        const sql = `INSERT INTO tbPagamento(idPedido, valor, formaPagamento)
                     VALUES (?, ?, ?);`;
        const response = await queryExecute(sql, [
            this.idPedido,
            this.valor,
            this.formaPagamento
        ]);
        if(response[0].affectedRows === 1){
            return {"Pagamento Adicionado": response[0]}
        }
        return {"Pagamento não foi adicionado": response[0]};
    }
}
(async ()=>{
    const resposta = await PagamentoModel.getAllPagamentoNome(1);
    console.log(resposta);
})();