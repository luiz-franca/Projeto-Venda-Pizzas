const BaseEntidade = require('./BaseEntidade');

class PedidoItem extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idPedidoItem = data.idPedidoItem || null;
        this._pedidoIdItem = data.pedidoIdItem || null;
        this._itemId = data.itemId || null;
        this._quantidade = data.quantidade || 0;
        this._subtotal = data.subtotal || 0;
    }
    get idPedidoItem() {
        return this._idPedidoItem;
    }
    set idPedidoItem(value) {
        this._idPedidoItem = value;
    }
    get pedidoIdItem() {
        return this._pedidoIdItem;
    }
    set pedidoIdItem(value) {
        this._pedidoIdItem = value;
    }
    get itemId() {
        return this._itemId;
    }
    set itemId(value) {
        this._itemId = value;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(value) {
        this._quantidade = value;
    }
    get subtotal() {
        return this._subtotal;
    }
    set subtotal(value) {
        this._subtotal = value;
    }
}

module.exports = PedidoItem;
