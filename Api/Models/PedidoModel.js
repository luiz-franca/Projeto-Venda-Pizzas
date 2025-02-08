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
        return response;
    }
    static async getIdPedidosUsuarios(IdParam){
        const sql = `SELECT * FROM tbPedido tP INNER JOIN tbCliente tC 
                    ON tP.idClient = tC.idCliente
                    WHERE idClient=(?);`;
        const response = await queryExecute(sql,[IdParam])
        const rows = response[0];
        if(rows.length === 0){
            console.log('idPedido não existe')
        }
        const classPedido = mappedEntidade(rows, entidade.Pedido)
        const data = mappedRowUtils(rows, row=>({
            idClient: row.idClient,
            nomeCliente: row.nomeCliente,
            dataPedido: row.dataPedido,
            valorTotal: row.valorTotal,
            statusPedido: row.statusPedido

        }))
        return data;
    }
    static async deletePedido(idPedido){
        const sql = "DELETE FROM tbPedido WHERE idPedido = (?);";
        const response = await queryExecute(sql, [idPedido])
        console.log(response);
        return response;
    }
}
module.exports = PedidoModel;