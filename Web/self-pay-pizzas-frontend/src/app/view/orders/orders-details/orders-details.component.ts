import {CurrencyPipe,Location} from '@angular/common';
import {Component,Input,OnChanges,SimpleChanges} from '@angular/core';
import {ActivatedRoute,RouterModule} from '@angular/router';
import {ItemDto} from '../../../dto/item.dto';
import {OrdersDto} from '../../../dto/orders.dto';
import {StockService} from '../../../services/stock.service';
import {OrdersUpdateService} from './../../../services/order-update.service';
import {OrdersService} from './../../../services/orders.service';
import {CustomersComponent} from './../../customers/customers.component';

@Component({
  selector: 'app-orders-details',
  standalone: true,
  imports: [RouterModule,CustomersComponent,CurrencyPipe],
templateUrl: './orders-details.component.html',
  styleUrl: './orders-details.component.css'
})
export class OrdersDetailsComponent implements OnChanges{
  itens: ItemDto[];
  pedido!: ItemDto;
  pedidos!: OrdersDto[];
  quantidade!: number;
  sizes: string[];
  dataAtual!:string;
  nome!: string;
  idCliente!: number;
  precoItem!: number;
  adminLogado!: string;
  @Input() id!: string;
  constructor(
    private active: ActivatedRoute,
    private location: Location,
    private stockService: StockService,
    private ordersService: OrdersService,
    private ordersUpdateService: OrdersUpdateService,
  ){
    this.itens = [];
    this.sizes = ['320g', '530g', '860g'];
    this.pedido = new ItemDto;
    this.quantidade = 1;
    this.pedido = {
      idItem: 0,
      nomeItem: "",
      imagemUrl: "",
      precoItem: 0,
      descricaoItem: ""
    };
    this.pedidos = [];
    this.precoItem = this.pedido.precoItem;
    this.dataAtual = JSON.stringify(new Date());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getItem();
    if (changes['id'] && changes['id'].currentValue) {
      this.getItemsById(Number(this.id));
    }
    let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
    let usuarioObj = JSON.parse(usuarioLogado);
    this.idCliente = usuarioObj[0].idCliente;
    this.nome = usuarioObj[0].nomeCliente;
    this.adminLogado = localStorage.getItem('funcionarioLogado') || '{}';
  }

  ngOnInit(){

  }

  getItem(){
    this.stockService.getItems().subscribe({
      next: (res:any)=>{
        this.itens = res.data;
      }
    });
  }

  getItemsById(id:number){
    this.stockService.getItemsById(id).subscribe({
      next: (res:any)=>{
        this.pedido = res.data[0];
        this.precoItem = this.pedido.precoItem;
      }
    })
  }

getOrderById(id:number,quantidade:number){
    this.ordersService.getOrderById(id).subscribe({
      next: (res) => {
        this.pedidos = res.data;
        this.addLogOrder(+this.adminLogado,this.pedidos[this.pedidos.length - 1].idPedido,"em producao");
        let meuPedido = this.pedidos[this.pedidos.length - 1];
        this.addItemToOrder(meuPedido.idPedido,+this.id, quantidade,meuPedido.valorTotal);
        this.ordersUpdateService.notifyPedidosUpdated(this.pedidos);  // Atualiza os outros componentes
      }, error: ()=>{
        console.log("Não existe pedidos");
      }
    })
  }

  addItemToOrder(pedidoIdItem:number, itemId:number, quantidade:number, subtotal:number){
    // console.log(this.idPedido)
    // if(this.idPedido === undefined){
      this.ordersService.addItemToOrder(pedidoIdItem, itemId, quantidade, subtotal).subscribe({
        next: (res:any)=>{
          localStorage.setItem('novoPedido', JSON.stringify(res.data));
          // localStorage.setItem('compra','finalizada')
          // this.statusCompra = localStorage.getItem('compra') || "";
          // this.getOrderById(this.idCliente);
        }
      })
    // }else{
    //   this.ordersService.updateItemToOrder(10, pedidoIdItem, itemId, quantidade, subtotal).subscribe({
    //     next: (res:any)=>{
    //       console.log(res);
    //     }
    //   })
    // }
    // this.voltar();
  }

  voltar():void{
    let pedido = document.getElementById('orders-details') as HTMLElement;
    pedido.style.display = "none";
  }

  aumentarQuantidade(pedido:number){
    let precoAtual = this.precoItem / this.quantidade;
    this.quantidade += 1;
    this.precoItem = precoAtual * this.quantidade;
  }

  diminuirQuantidade(pedido:number){
    if(this.quantidade > 1){
      let novoPreco = this.precoItem / this.quantidade;
      this.precoItem -= novoPreco;
      this.quantidade -= 1;
    }
  }

  adicionarAoCarrinho(){
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "block";
    this.voltar();
  }

  addOrder(idClient:number, dataPedido:string, valorTotal:number, quantidade:number,statusPedido:string){
    this.ordersService.addOrder(idClient, dataPedido, valorTotal, statusPedido, quantidade).subscribe({
      next: (res:any)=>{
        this.getOrderById(this.idCliente, quantidade);
        this.getOrders();
        // this.getItemOrderById(this.idCliente);
      }
    })
    this.voltar();
  }

  carregandoDados(){
    let timerInterval:any;
    (window as any).Swal.fire({
      title: "Carregando...",
      html: "Adicionando novo item ao pedido",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        (window as any).Swal.showLoading();
        const timer = (window as any).Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${(window as any).Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result:any) => {
      if (result.dismiss === (window as any).Swal.DismissReason.timer) {
        this.sucessoItem();
      }
    });
  }

  sucessoItem(){
    (window as any).Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item adicionado ao pedido.",
      showConfirmButton: false,
      timer: 1500
    });
  }

  getOrders(){
    this.ordersService.getOrder().subscribe({
      next:()=>{
        this.carregandoDados();
      }
    })
  }


  addLogOrder(idAdmin:number, idPedido:number, statusAlteradoPara:string){
    this.ordersService.addLogOrder(idAdmin, idPedido, statusAlteradoPara).subscribe({
      next: (res:any)=>{
        //
      }
    })
  }

  getItemOrderById(id: number){
    this.ordersService.getItemOrderById(id).subscribe({
      next: (res:any)=>{
        console.log(res.data);
      }
    })
  }
}
