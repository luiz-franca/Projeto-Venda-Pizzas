const BaseEntidade = require('./BaseEntidade');

class Item extends BaseEntidade {
    constructor(data = {}) {
        super(data);
        this._idItem = data.idItem || null;
        this._nomeItem = data.nomeItem || '';
        this._precoItem = data.precoItem || 0;
        this._descricaoItem = data.descricaoItem || '';
        this._imagemUrl = data.imagemUrl || '';
    }
    get id() {
        return this._idItem;
    }
    set id(value) {
        this._idItem = value;
    }
    get nome() {
        return this._nomeItem;
    }
    set nome(value) {
        this._nomeItem = value;
    }
    get preco() {
        return this._precoItem;
    }
    set preco(value) {
        this._precoItem = value;
    }
    get descricao() {
        return this._descricaoItem;
    }
    set descricao(value) {
        this._descricaoItem = value;
    }
    get imagem() {
        return this._imagemUrl;
    }
    set imagem(value) {
        this._imagemUrl = value;
    }
}
// const teste = new Item({idItem:1, nomeItem: 'teste', precoItem:"2.2", descricaoItem:"testedasd", imagemItem: "caominha"})
// console.log(teste._nomeItem)
module.exports = Item;
