import {CurrencyPipe,SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {ItemDto} from '../../dto/item.dto';
import {OrdersDto} from './../../dto/orders.dto';
import {OrdersUpdateService} from './../../services/order-update.service';
import {OrdersService} from './../../services/orders.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CurrencyPipe,SlicePipe],
templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent{
    quantidade!: number;
    valorTotal!:number;
    desconto!: number;
    item: ItemDto[];
    pedidos!: OrdersDto[];
    pedidosFinalizados!: any[];
    idPedido!: any;
    valorComDesconto!:number;
    idCliente!:number;
    nome!: string;
    statusCompra!: string;
    itemOrder!: any[];
    allItemOrder!: any[];
    constructor(
      private ordersService:OrdersService,
      private ordersUpdateService: OrdersUpdateService,
    ){
      this.item = [];
      this.pedidos = [];
      this.quantidade = 0;
      this.itemOrder = [];
      this.allItemOrder = [];
      this.pedidosFinalizados = [];
      this.valorTotal = 0;
      this.valorTotal = +(this.valorTotal * this.quantidade).toFixed(2);

    }

    ngOnInit(){
      let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
      let usuarioObj = JSON.parse(usuarioLogado);
      this.idCliente = usuarioObj[0].idCliente;
      this.nome = usuarioObj[0].nomeCliente;

      this.getOrderById(this.idCliente);
      this.getItem();
      this.getItemOrder();
      this.quantidade = 1;
      this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
      this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
      let novoPedido = localStorage.getItem('novoPedido') || '{}';
      let pedidoObj: any = JSON.parse(novoPedido);
      Object.values(pedidoObj).forEach((element:any) => {
        this.idPedido = element['insertId'];
      });
      this.statusCompra = localStorage.getItem('compra') || "";
      this.ordersUpdateService.getPedidosUpdatedListener().subscribe((pedidos: OrdersDto[]) => {
        this.pedidos = pedidos;  // Atualiza a lista de pedidos
        this.calcularTotal(this.pedidos);
      });
    }

  voltar():void{
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "none";
  }

  aumentarQuantidade(quantidade: number, valor: number, indice: number) {
    // Acessa diretamente o item pelo índice na lista 'pedidos'
    const pedido = this.pedidos[indice];

    if (pedido) {
      // Aumenta a quantidade
      pedido.quantidade += 1;

      // Recalcula o valor total do pedido com a nova quantidade
      const valorUnitario = pedido.valorTotal / quantidade;
      pedido.valorTotal = +(valorUnitario * pedido.quantidade).toFixed(2);

      // Atualiza o valor total geral (soma de todos os valores dos pedidos)
      this.valorTotal = this.pedidos.reduce((total, pedido) => total + pedido.valorTotal, 0);

      // Atualiza o valor com desconto
      this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
      this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
    }
  }

  diminuirQuantidade(quantidade: number, valor: number, indice: number) {
    // Acessa diretamente o item pelo índice na lista 'pedidos'
    const pedido = this.pedidos[indice];

    if (pedido && pedido.quantidade > 1) {
      // Diminui a quantidade
      pedido.quantidade -= 1;

      // Recalcula o valor total do pedido com a nova quantidade
      const valorUnitario = pedido.valorTotal / quantidade;
      pedido.valorTotal = +(valorUnitario * pedido.quantidade).toFixed(2);

      // Atualiza o valor total geral (soma de todos os valores dos pedidos)
      this.valorTotal = this.pedidos.reduce((total, pedido) => total + pedido.valorTotal, 0);

      // Atualiza o valor com desconto
      this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
      this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
    }
  }



  addItemToOrder(pedidoIdItem:number, itemId:number, quantidade:number, subtotal:number){
    console.log(this.idPedido)
    if(this.idPedido === undefined){
      this.ordersService.addItemToOrder(pedidoIdItem, itemId, quantidade, subtotal).subscribe({
        next: (res:any)=>{
          // console.log(res);
          localStorage.setItem('novoPedido', JSON.stringify(res.data));
          localStorage.setItem('compra','finalizada')
          this.statusCompra = localStorage.getItem('compra') || "";
          // this.getOrderById(this.idCliente);
        }
      })
    }else{
      this.ordersService.updateItemToOrder(10, pedidoIdItem, itemId, quantidade, subtotal).subscribe({
        next: (res:any)=>{
          // console.log(res);
        }
      })
    }
    this.voltar();
  }

  setCompra(){
    localStorage.setItem('compra','pendente')
    this.statusCompra = localStorage.getItem('compra') || "";
  }


  getItem(){
    this.ordersService.getItem().subscribe({
      next: (res) => {
        // console.log("item", res.data)
        this.item = res.data;
      }
    })
  }

  getItemOrder(){
    this.ordersService.getItemOrder().subscribe({
      next: (res) => {
        this.allItemOrder = res.data;
        this.getItemOrderNameById(this.allItemOrder[this.allItemOrder.length - 1].idPedidoItem);
      }
    })
  }

  getOrderById(id:number){
    this.ordersService.getOrderById(id).subscribe({
      next: (res) => {
        this.pedidos = res.data;
        this.calcularTotal(this.pedidos);
      }, error: ()=>{
        this.pedidos = [];
        console.log("Não existe pedidos");
      }
    })
  }

  getItemOrderNameById(id:number){
    this.ordersService.getItemOrderNameById(id).subscribe({
      next: (res) => {
        this.itemOrder = res.data;
      }, error: ()=>{
        console.log("erro");
      }
    })
  }

  calcularTotal(pedidos:any[]){
    pedidos.forEach(element => {
      this.valorTotal += element.valorTotal;
    });
    // this.valorTotal = +(this.valorTotal * this.quantidade).toFixed(2);
    this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
    this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
  }

  payment(valorComDesconto:number, pedidos: any[]){
    this.pedidosFinalizados.push(pedidos);
    console.log(this.pedidosFinalizados);
    this.ordersUpdateService.setPedidosFinalizados(this.pedidosFinalizados);
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "none";
    let pagamento = document.getElementById('payment') as HTMLElement;
    pagamento.style.display = "block";
  }

}
