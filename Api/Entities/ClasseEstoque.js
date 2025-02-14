const BaseEntidade = require('./BaseEntidade');

class Estoque extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idEstoque = data.idEstoque || null;
        this._nomeInsumo = data.nomeInsumo || '';
        this._quantidadeInsumo = data.quantidade || 0;
    }
    get id() {
        return this._idEstoque;
    }
    set id(value) {
        this._idEstoque = value;
    }
    get nome() {
        return this._nomeInsumo;
    }
    set nome(value) {
        this._nomeInsumo = value;
    }
    get quantidade() {
        return this._quantidadeInsumo;
    }
    set quantidade(value) {
        this._quantidadeInsumo = value;
    }
}

module.exports = Estoque;
