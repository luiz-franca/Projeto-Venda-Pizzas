import {CurrencyPipe,SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {ItemDto} from '../../dto/item.dto';
import {OrdersUpdateService} from './../../services/order-update.service';
import {OrdersService} from './../../services/orders.service';
import { SweetalertUtil } from '../../util/sweetalert.util';

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
    pedidosFinalizados!: any[];
    idPedido!: any;
    valorComDesconto!:number;
    idCliente!:number;
    nome!: string;
    statusCompra!: string;
    itemOrder!: any[];
    allItemOrder!: any[];
    count!: number;
    swal!: SweetalertUtil;
    constructor(
      private ordersService:OrdersService,
      private ordersUpdateService: OrdersUpdateService,
    ){
      this.swal = new SweetalertUtil();
      this.item = [];
      this.quantidade = 0;
      this.count = 0;
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
      this.ordersUpdateService.getPedidosUpdatedListener().subscribe((pedidos: any[]) => {
        this.getItemOrder();
      });
    }

  voltar():void{
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "none";
  }

  getGroupedItems(items: any[]) {
    const grouped = items.reduce((acc, item) => {
      const existingItem = acc.find((i: any) => i.nomeItem === item.nomeItem);

      if (existingItem) {
        existingItem.quantidade += item.quantidade;
        existingItem.valorTotal += item.valorTotal;
      } else {
        acc.push({ ...item });
      }

      return acc;
    }, []);

    return grouped;
  }

  addItemToOrder(pedidoIdItem:number, itemId:number, quantidade:number, subtotal:number){
    this.ordersService.addItemToOrder(pedidoIdItem, itemId, quantidade, subtotal).subscribe({
      next: (res:any)=>{
        localStorage.setItem('novoPedido', JSON.stringify(res.data));
        localStorage.setItem('compra','finalizada')
        this.statusCompra = localStorage.getItem('compra') || "";
      }, error:(err:Error)=>{
        this.swal.erroItem(`Erro ao adicionar um item a ordem: ${err.cause}`)
      }
    })
    this.voltar();
  }

  setCompra(){
    localStorage.setItem('compra','pendente')
    this.statusCompra = localStorage.getItem('compra') || "";
  }


  getItem(){
    this.ordersService.getItem().subscribe({
      next: (res) => {
        this.item = res.data;
      },error:(err:Error)=>{
        this.swal.erroItem(`Erro ao consultar os itens: ${err.cause}`)
      }
    })
  }

  getItemOrder() {
    this.ordersService.getItemOrder().subscribe({
      next: (res: any) => {
        this.allItemOrder = res.data;
        this.allItemOrder.forEach(element => {
          this.getItemOrderNameById(element.idPedidoItem);
        });
      },error:(err:Error)=>{
        this.swal.erroItem(`Erro ao consultar os itens de uma ordem: ${err.cause}`)
      }
    });
  }

  getItemOrderNameById(id: number) {
    this.ordersService.getItemOrderNameById(id).subscribe({
      next: (res: any) => {
        const item = res.data[0];
        if (item && item.nomeCliente === this.nome) {
          this.itemOrder.push(item);
          this.calcularTotal(item.valorTotal);
        }
      },
      error: (err:Error) => {
        this.swal.erroItem(`Erro ao consultar as itens das ordens por nome: ${err.cause}`)
      }
    });
  }

  calcularTotal(valorTotal: number) {
    if (valorTotal !== undefined) {
      this.valorTotal += valorTotal;
      this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
      this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
    }
  }


  payment(valorComDesconto:number, pedidos: any[]){
    this.pedidosFinalizados.push(pedidos);
    this.ordersUpdateService.setPedidosFinalizados(this.pedidosFinalizados);
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "none";
    let pagamento = document.getElementById('payment') as HTMLElement;
    pagamento.style.display = "block";
  }

}
