const BaseEntidade = require('./BaseEntidade');

class Pagamento extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idPagamento = data.idPagamento || null;
        this._pedidoPagamento = data.pedidoPagamento || null;
        this._valorPagamento = data.valorPagamento || 0;
        this._formaPagamento = data.formaPagamento || '';
        this._dataPagamento = data.dataPagamento || null;
    }
    get id() {
        return this._idPagamento;
    }
    set id(value) {
        this._idPagamento = value;
    }
    get pedido() {
        return this._pedidoPagamento;
    }
    set pedido(value) {
        this._pedidoPagamento = value;
    }
    get valor() {
        return this._valorPagamento;
    }
    set valor(value) {
        this._valorPagamento = value;
    }
    get forma() {
        return this._formaPagamento;
    }
    set forma(value) {
        this._formaPagamento = value;
    }
    get data() {
        return this._dataPagamento;
    }
    set data(value) {
        this._dataPagamento = value;
    }
}

module.exports = Pagamento;
