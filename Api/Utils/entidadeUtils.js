const importEntidades = require('@entidades/utils')

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
module.exports = Entidade;