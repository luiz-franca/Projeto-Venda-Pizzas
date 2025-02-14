const BaseEntidade = require('./BaseEntidade');

class Cliente extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idCliente = data.idCliente || null;
        this._nomeCliente = data.nomeCliente || '';
        this._telefone = data.telefone || '';
        this._email = data.email || '';
        this._senha = data.senha || '';
    }
    get id() {
        return this._idCliente;
    }
    set id(value) {
        this._idCliente = value;
    }
    get nome() {
        return this._nomeCliente;
    }
    set nome(value) {
        this._nomeCliente = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
    get email() {
        return this._emailCliente;
    }
    set email(value) {
        this._email = value;
    }
    get senha() {
        return this._senha;
    }
    set senha(value) {
        this._senha = value;
    }
}

module.exports = Cliente;
