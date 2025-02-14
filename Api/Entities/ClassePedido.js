const BaseEntidade = require('./BaseEntidade');

class Pedido extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idPedido = data.idPedido || null;
        this._idClientePedido = data.idClientePedido || null;
        this._dataPedido = data.dataPedido || null;
        this._valorTotalPedido = data.valorTotalPedido || 0;
        this._statusPedidoPedido = data.statusPedidoPedido || null;
    }
    get id() {
        return this._idPedido;
    }
    set id(value) {
        this._idPedido = value;
    }
    get idCliente() {
        return this._idClientePedido;
    }
    set idCliente(value) {
        this._idClientePedido = value;
    }
    get data() {
        return this._dataPedido;
    }
    set data(value) {
        this._dataPedido = value;
    }
    get valorTotal() {
        return this._valorTotalPedido;
    }
    set valorTotal(value) {
        this._valorTotalPedido = value;
    }
    get statusPedido() {
        return this._statusPedidoPedido;
    }
    set statusPedido(value) {
        this._statusPedidoPedido = value;
    }
}

module.exports = Pedido;
