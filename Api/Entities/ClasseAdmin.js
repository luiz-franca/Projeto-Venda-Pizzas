const BaseEntidade = require('./BaseEntidade');

class Admin extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idAdmin = data.idAdmin || null;
        this._nomeAdmin = data.nomeAdmin || '';
        this._loginAdmin = data.loginAdmin || '';
        this._senhaAdmin = data.senhaAdmin || '';
    }
    get id() {
        return this._idAdmin;
    }
    set id(value) {
        this._idAdmin = value;
    }
    get nome() {
        return this._nomeAdmin;
    }
    set nome(value) {
        this._nomeAdmin = value;
    }
    get login() {
        return this._loginAdmin;
    }
    set login(value) {
        this._loginAdmin = value;
    }
    get senha() {
        return this._senhaAdmin;
    }
    set senha(value) {
        this._senhaAdmin = value;
    }
}

module.exports = Admin;
