const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');

class PedidoItemModel{
    constructor(
        idPedidoItem=null,
        pedidoIdItem=null,
        itemId=null,
        quantidade=null,
        subtotal=null
    ){
        this.idPedidoItem=idPedidoItem;
        this.pedidoIdItem=pedidoIdItem;
        this.itemId=idPedidoItem;
        this.itemId=itemId;
        this.quantidade=quantidade;
        this.subtotal=subtotal;
    }
    static async getAllPedidoItem(){
        const sql = "SELECT * FROM tbPedidoItem;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row =>({
            idPedidoItem: row.idPedidoItem,
            pedidoIdItem: row.pedidoIdItem,
            itemId: row.itemId,
            quantidade:row.quantidade,
            subtotal: row.subtotal
        }))
        return data;
    }
    static async getAllPedidoItemNomes(){
        const sql = `SELECT tC.nomeCliente,
        tI.nomeItem,
        tI.descricaoItem,
        tP.dataPedido,
        tI.precoItem,
        tP.statusPedido,
        tPi.subtotal,
        tP.valorTotal
        FROM tbPedidoItem tPi
        INNER JOIN tbPedido tP ON tPi.pedidoIdItem = tP.idPedido
        INNER JOIN tbCliente tC ON tP.idClient = tC.idCliente
        INNER JOIN tbItem tI ON tPi.itemId = tI.idItem;`;
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows,row =>({
            nomeItem: row.nomeItem,
            descricaoItem: row.descricaoItem,
            dataPedido: row.dataPedido,
            precotItem: row.precoItem,
            statusPedido: row.statusPedido,
            subtotal: row.subtotal,
            valorTotal: row.valorTotal
        }))
        return data;
    }
    static async getIdPedidoItem(paramId){
        const sql = `SELECT * FROM tbPedidoItem WHERE idPedidoItem = (?);`;
        const response = await queryExecute(sql,[paramId]);
        return response[0];
    }
    static async getIdPedidoItemNome(paramId){
        const sql = `SELECT tC.nomeCliente,
        tI.nomeItem,
        tI.descricaoItem,
        tP.dataPedido,
        tI.precoItem,
        tP.statusPedido,
        tPi.subtotal,
        tP.valorTotal
        FROM tbPedidoItem tPi
        INNER JOIN tbPedido tP ON tPi.pedidoIdItem = tP.idPedido
        INNER JOIN tbCliente tC ON tP.idClient = tC.idCliente
        INNER JOIN tbItem tI ON tPi.itemId = tI.idItem
        WHERE tPi.idPedidoItem = (?);`;
        const response = await queryExecute(sql,[paramId]);
        if(response[0].length === 0){
            return {"esse idPedidoItem não existe consulta": response}
        }
        return response[0];
    }
    async insertPedidoItem(){
        const sql = `INSERT INTO tbPedidoItem(pedidoIdItem, itemId, quantidade, subtotal) VALUES
                    (?,?,?,?);`;
        const response = await queryExecute(sql,[
            this.pedidoIdItem, 
            this.itemId,
            this.quantidade,
            this.subtotal
        ])
        if(response[0].affectedRows === 1){
            return {"PedidoItem adicionado": response[0]}
        }
        return {"PedidoItem não adicionado": "erro"};
    }
    async updatePedidoItem(paramId){
        const sql = `CALL spUpdatePedidoItem(?,?,?,?,?);`;
        const response = await queryExecute(sql,[
            paramId,
            this.pedidoIdItem,
            this.itemId,
            this.quantidade,
            this.subtotal
        ])
        return response[0];
    }
    static async deletePedidoItem(paramId){
        const sql = `DELETE FROM tbPedidoItem WHERE idPedidoItem = (?);`;
        const response = await queryExecute(sql,[paramId])
        if(response[0].affectedRows === 1){
            return {"idPedidoItem Deletado": response[0]}
        }
        return {"idPedidoItem não existe": response[0]};
    }
}
module.exports = PedidoItemModel;