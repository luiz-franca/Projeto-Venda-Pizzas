import {CurrencyPipe,SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {ItemDto} from '../../dto/item.dto';
import {SweetalertUtil} from '../../util/sweetalert.util';
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
    pedidosFinalizados!: any[];
    idPedido!: any;
    valorComDesconto!:number;
    idCliente!:number;
    nome!: string;
    statusCompra!: string;
    itemOrder!: any[];
    pedidos!: any[];
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
      this.pedidos = [];
      this.pedidosFinalizados = [];
      this.valorTotal = 0;
      this.valorTotal = +(this.valorTotal * this.quantidade).toFixed(2);

    }

    ngOnInit(){
      let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
      let usuarioObj = JSON.parse(usuarioLogado);
      this.idCliente = usuarioObj[0].idCliente;
      this.nome = usuarioObj[0].nomeCliente;

      this.getItemOrder();
      this.getOrderById(this.idCliente)
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
        this.itemOrder = [];
        this.valorTotal = 0;
        this.desconto = 0;
        this.valorComDesconto = 0;
        this.getItemOrder();
      });
    }

  voltar():void{
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "none";
  }

  excluirPedido(id: number){
    this.ordersService.deleteOrder(id).subscribe({

    })
  }

  excluirPedidoItem(id:number){
    this.ordersService.deleteOrderItem(id).subscribe({

    })
  }

   updateOrder(id:number,idClient:number, dataPedido:string, valorTotal:number, statusPedido:string, quantidade:number){
      this.ordersService.updateOrder(id,idClient, dataPedido, valorTotal, statusPedido, quantidade).subscribe({
        next: (res:any)=>{

        }
      })
    }

    setUpdateOrder(){
      this.getOrderById(this.idCliente);
      const date = new Date().toLocaleString('en-CA', { hour12: false }).replace(',', '');
      this.pedidosFinalizados.forEach(element => {
        this.updateOrder(element.idPedido,element.idClient, date, element.valorTotal, "em_preparação", element.quantidade);
      });
    }

  cancelarCompra():void{
    let pedido = document.getElementById('customers') as HTMLElement;
    this.pedidosFinalizados.forEach(element => {
      this.excluirPedidoItem(element.idPedidoItem)
    })
    this.excluirPedido(this.idPedido);
    this.setUpdateOrder();
    this.ordersUpdateService.notifyPedidosUpdated(this.pedidos);
    pedido.style.display = "none";
    this.swal.carregandoDados("Cancelando pedido","Pedido cancelado com sucesso.");
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

  getItemOrder() {
    this.ordersService.getItemOrder().subscribe({
      next: (res: any) => {
        this.pedidos = res.data;
        this.pedidos.forEach((element:any) => {
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

  getOrderById(id:number){
    this.ordersService.getOrderById(id).subscribe({
      next:(res:any)=>{
        this.pedidosFinalizados = res.data;
        this.idPedido = this.pedidosFinalizados[0].idpedido;
      }
    })
  }

}
