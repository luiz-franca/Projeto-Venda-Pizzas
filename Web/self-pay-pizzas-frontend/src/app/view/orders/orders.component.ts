import {CommonModule,CurrencyPipe} from '@angular/common';
import {Component} from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import {ItemDto} from '../../dto/item.dto';
import {AuthService} from '../../services/auth.service';
import {StockService} from '../../services/stock.service';
import {PaymentComponent} from '../payment/payment.component';
import {OrdersDto} from './../../dto/orders.dto';
import {OrdersUpdateService} from './../../services/order-update.service';
import {OrdersService} from './../../services/orders.service';
import {CustomersComponent} from './../customers/customers.component';
import {ItemsDetailComponent} from './../items/items-detail/items-detail.component';
import {OrdersDetailsComponent} from './orders-details/orders-details.component';
import { BootstrapUtil } from '../../util/bootstrap.util';


@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterModule,CommonModule,ItemsDetailComponent],
templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  itens:ItemDto[];
  pedidos!:OrdersDto[];
  id!: string;
  nome!: string;
  idCliente!: string;
  statusCompra!: string;
  valorTotal!:number;
  desconto!: number;
  valorComDesconto!:number;
  pedidosFinalizados!: any[];
  item!: any;
  bootstrap!: BootstrapUtil;

  constructor(
    private authService: AuthService,
    private stockService: StockService,
    private router: Router,
    private ordersService: OrdersService,
    private ordersUpdateService: OrdersUpdateService
  ){
    this.bootstrap = new BootstrapUtil();
    this.bootstrap.startBootstrap();
    this.itens = [];
    this.pedidos = [];
    this.pedidosFinalizados = [];

  }

  ngOnInit(){
    this.getItem();
    this.bootstrap.startBootstrap();
    let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
    let usuarioObj = JSON.parse(usuarioLogado);
    this.idCliente = usuarioObj[0].idCliente;
    this.nome = usuarioObj[0].nomeCliente;
    this.statusCompra = localStorage.getItem('compra') || "";
    this. getOrderById(+this.idCliente);
    this.ordersUpdateService.pedidosFinalizados$.subscribe((pedidos:any) => {
      this.pedidosFinalizados = pedidos;
    });
  }

  getItem(){
    this.stockService.getItems().subscribe({
      next: (res:any)=>{
        this.itens = res.data;
      }
    });
  }

  addItems(nomeItem:any, precoItem:any, descricaoItem:any, imagemUrl:any){
    this.stockService.addItems( nomeItem, precoItem, descricaoItem, imagemUrl);
  }

  verPedido(id:number):number{
    this.id = `${id}`;
    let pedido = document.getElementById(`cart${id}`) as HTMLElement;
    pedido.style.display = pedido.style.display === "none" ? "block" : "none";;
    return id;
  }

  logout(){
    this.authService.logout();
  }

  voltar():void{
    let pedido = document.getElementById('orders-details') as HTMLElement;
    pedido.style.display = "none";
  }

  verPedidos(){
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "block";
    this.voltar();
  }

  verItems(){
    this.router.navigate(['/items']);
  }

  calcularTotal(pedidos:any[]){
    pedidos.forEach(element => {
      this.valorTotal += element.valorTotal;
    });
    this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
    this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
  }

  getOrderById(id:number){
    this.ordersService.getOrderById(id).subscribe({
      next: (res:any) => {
        this.pedidos = res.data;
        this.calcularTotal(this.pedidos);
      }, error: ()=>{
        this.pedidos = [];
        console.log("Não existe pedidos");
      }
    })
  }

  showOrder(id: number, type: string) {
    (window as any).Swal.fire({
      title: "Tem certeza?",
      text: "Essa ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar"
    }).then((result:any) => {
      if(result.isConfirmed){
        if (type === 'admin') {
          (window as any).Swal.fire("Excluído!", "O registro foi removido com sucesso.", "success");
        }else {
          (window as any).Swal.fire("Excluído!", "O registro foi removido com sucesso.", "success");
        }
      }
    });
  }
}
