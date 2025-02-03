const importEntidades = require('../Entities/utils')

class Entidade{
    constructor(){
        this.Admin = importEntidades.Admin;
        this.Cliente = importEntidades.Cliente;
        this.Estoque = importEntidades.Estoque;
        this.Item = importEntidades.Item;
        this.Pagamento = importEntidades.Pagamento;
        this.Pedido = importEntidades.Pedido;
        this.PedidoItem = importEntidades.PedidoItem;
    }
}
// const entidade = new Entidade();
// const cliente = new entidade.Admin({idAdmin: 1, nomeAdmin:"Gustavo", loginAdmin:"12345@teste", senha:"teste"});
// console.log(cliente)
module.exports = Entidade;