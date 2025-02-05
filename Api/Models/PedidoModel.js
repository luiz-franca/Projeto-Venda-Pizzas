const queryExecute = require('../Utils/queryExecute');
const Entidade = require("../Utils/entidadeUtils");
const {mappedRowUtils,mappedEntidade} = require("./utils");

const entidade = new Entidade()
class PedidoModel{
    constructor(
        idPedido = null,
        idClient = null,
        dataPedido = null,
        valorTotal = null,
        statusPedido = null
    ){
        this.idPedido = idPedido,
        this.idClient = idClient,
        this.dataPedido = dataPedido,
        this.valorTotal = valorTotal,
        this.statusPedido = statusPedido
    }
    static async getAllPedidos(){
        const sql = "SELECT * FROM tbPedido;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row =>({
            idPedido: row.idPedido,
            idClient: row.idClient,
            dataPedido: row.idClient,
            valorTotal: row.valorTotal,
            statusPedido: row.statusPedido
        }))
        mappedEntidade(data, entidade.Pedido)
        return data
    }
    async insertPedido(){
        const sql = `INSERT INTO tbPedido (idClient, nomeItem, dataPedido, valorTotal, statusPedido)
        VALUES (?,?,?,?,?)`;
        const response = await queryExecute(sql,[this.idClient, this.nomeItem ,this.dataPedido, this.valorTotal, this.statusPedido])
        console.log(response)
    }
    async updatePedido(paramId){
        const sql = `CALL spUpdatePedido(?,?,?,?,?);`;
        const response = await queryExecute(sql,[
            paramId, 
            this.idClient, 
            this.dataPedido, 
            this.valorTotal, 
            this.statusPedido
        ]);
        return response;
    }
    static async deletePedido(deleteIdPedido){
        const sql = "DELETE FROM tbPedido WHERE idPedido=(?);";
        const response = await queryExecute(sql,[deleteIdPedido])
        console.log(response);
        return response;
    }
    static async getIdPedidosUsuarios(paramIdPedidos){
        const sql = "CALL spViewPedido(?);";
        const response = await queryExecute(sql,[paramIdPedidos])
        const rows = response[0];
        // está voltando underfined
        const data  = mappedRowUtils(rows, row =>({
            idClient: row.idClient,
            nomeCliente: row.nomeCliente
            
        }))
        console.log(data);
    }
}
(async()=>{
    const response = await PedidoModel.getIdPedidosUsuarios(7);
})();
module.exports = PedidoModel;