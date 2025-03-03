const queryExecute = require('@utilidades/queryExecute');
const mappedRowUtils = require('./mappedRowUtils');

class PedidoModel{
    constructor(
        idPedido = null,
        idClient = null,
        dataPedido = null,
        valorTotal = null,
        statusPedido = null,
        quantidade = null
    ){
        this.idPedido = idPedido,
        this.idClient = idClient,
        this.dataPedido = dataPedido,
        this.valorTotal = valorTotal,
        this.statusPedido = statusPedido,
        this.quantidade = quantidade

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
            statusPedido: row.statusPedido,
            quantidade: row.quantidade

        }))
        return data
    }
    async insertPedido(){
        const sql = `INSERT INTO tbPedido (idClient, dataPedido, valorTotal, statusPedido, quantidade)
        VALUES (?,?,?,?,?);`;
        const response = await queryExecute(sql,[this.idClient,this.dataPedido, this.valorTotal, this.statusPedido, this.quantidade])
        return response[0].affectedRows === 1? "pedido adicionado": "erro pedido não foi adicionado";
    }
    async updatePedido(paramId){
        const sql = `CALL spUpdatePedido(?,?,?,?,?,?);`;
        const response = await queryExecute(sql,[
            paramId, 
            this.idClient, 
            this.dataPedido, 
            this.valorTotal, 
            this.statusPedido,
            this.quantidade
        ]);
        return response[0];
    }
    static async deletePedido(deleteIdPedido){
        const sql = "DELETE FROM tbPedido WHERE idPedido=(?);";
        const response = await queryExecute(sql,[deleteIdPedido])
        return response;
    }
    static async getIdPedidosCliente(IdParam, res) {
        try {
            const sql = `SELECT * FROM tbPedido tP
                            INNER JOIN tbCliente tC ON tP.idClient = tC.idCliente
                            WHERE tP.idClient = (?);`;
            const response = await queryExecute(sql, [IdParam]);
            const rows = response[0];
    
            if (rows.length === 0) {
                console.log('idPedido não existe');
                return res.status(404).json({ message: 'Pedido não encontrado' }); // Finaliza a resposta aqui
            }
    
            const data = mappedRowUtils(rows, row => ({
                idPedido: row.idPedido,
                idClient: row.idClient,
                nomeCliente: row.nomeCliente,
                dataPedido: row.dataPedido,
                valorTotal: row.valorTotal,
                statusPedido: row.statusPedido,
                quantidade: row.quantidade,
                nomeItem: row.nomeItem
            }));
    
            return data; // Retorna apenas se tiver dados
        } catch (error) {
            console.error('Erro ao buscar pedidos do cliente:', error);
            return res.status(500).json({ message: 'Erro interno no servidor' });
        }
    }
    
    static async deletePedido(idPedido){
        const sql = "DELETE FROM tbPedido WHERE idPedido = (?);";
        const response = await queryExecute(sql, [idPedido])
        return response[0].affectedRows === 1? "pedido deletado": "pedido não deletado";
    }
}
module.exports = PedidoModel;