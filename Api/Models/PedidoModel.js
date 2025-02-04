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
        const data = mappedRowUtils(rows, row =>{})
        console.log("dentro", rows)
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
        console.log(response);
    }
}
(async()=>{
    const response = await PedidoModel.getIdPedidosUsuarios(1);
})();
module.exports = PedidoModel;