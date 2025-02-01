const Cliente = require('../Entities/ClasseClient');

class Entidade{
    constructor(){
        this.Cliente = Cliente;
    }
}
const entidade = new Entidade();
const cliente = new entidade.Cliente(1, "Gustavo", "12345", "Brasil", "email", "senha");
module.exports = Entidade;