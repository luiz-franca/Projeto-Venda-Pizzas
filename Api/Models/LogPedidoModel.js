const queryExecute = require('@utilidades/queryExecute');
const Entidade = require("@utilidades/entidadeUtils");


const entidade = new Entidade();

class LogPedidoModel {
    constructor(
        idLogPedido = null,
        idAdmin = null,
        idPedido = null,
        statusAlteradoPara = null,
        dataAlteracao = null
    ) {
        this.idLogPedido = idLogPedido;
        this.idAdmin = idAdmin;
        this.idPedido = idPedido;
        this.statusAlteradoPara = statusAlteradoPara;
        this.dataAlteracao = dataAlteracao;
    }

    static async getAllLogsPedido() {
        const sql = "SELECT * FROM tbLogPedido;";
        const response = await queryExecute(sql);
        const rows = response[0];
        const data = mappedRowUtils(rows, row => ({
            idLogPedido: row.idLogPedido,
            idAdmin: row.idAdmin,
            idPedido: row.idPedido,
            statusAlteradoPara: row.statusAlteradoPara,
            dataAlteracao: row.dataAlteracao
        }));
        return data;
    }

    async insertLogPedido() {
        const sql = `CALL spInsertLogPedido(?,?,?);`;
        const response = await queryExecute(sql, [this.idAdmin, this.idPedido, this.statusAlteradoPara]);
        console.log(response)
        return response[0]? { "log adicionado": response[0] } : { "log não adicionado": response[0] };
    }

    static async getLogPedidoById(idLogPedido) {
        const sql = `SELECT * FROM tbLogPedido 
                     WHERE idLogPedido = ?;`;
        const response = await queryExecute(sql, [idLogPedido]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Log de pedido não encontrado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idLogPedido: row.idLogPedido,
            idAdmin: row.idAdmin,
            idPedido: row.idPedido,
            statusAlteradoPara: row.statusAlteradoPara,
            dataAlteracao: row.dataAlteracao
        }));
        return data;
    }

    static async deleteLogPedido(idLogPedido) {
        const sql = "DELETE FROM tbLogPedido WHERE idLogPedido = ?;";
        const response = await queryExecute(sql, [idLogPedido]);
        return response[0].affectedRows === 1 ? { "log deletado": response[0] } : { "ação falhou": response[0] };
    }

    static async getLogsByAdminId(idAdmin) {
        const sql = `SELECT * FROM tbLogPedido 
                     WHERE idAdmin = ?;`;
        const response = await queryExecute(sql, [idAdmin]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Nenhum log encontrado para o admin especificado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idLogPedido: row.idLogPedido,
            idAdmin: row.idAdmin,
            idPedido: row.idPedido,
            statusAlteradoPara: row.statusAlteradoPara,
            dataAlteracao: row.dataAlteracao
        }));
        return {"detAdmin success": data};
    }

    static async getLogsByPedidoId(idPedido) {
        const sql = `SELECT * FROM tbLogPedido 
                     WHERE idPedido = ?;`;
        const response = await queryExecute(sql, [idPedido]);
        const rows = response[0];
        if (rows.length === 0) {
            console.log('Nenhum log encontrado para o pedido especificado');
            return null;
        }
        const data = mappedRowUtils(rows, row => ({
            idLogPedido: row.idLogPedido,
            idAdmin: row.idAdmin,
            idPedido: row.idPedido,
            statusAlteradoPara: row.statusAlteradoPara,
            dataAlteracao: row.dataAlteracao
        }));
        return {"logPedido sucess": data};
    }
}
module.exports = LogPedidoModel;