import {CurrencyPipe,Location} from '@angular/common';
import {Component,Input,OnChanges,SimpleChanges} from '@angular/core';
import {ActivatedRoute,RouterModule} from '@angular/router';
import {ItemDto} from '../../../dto/item.dto';
import {OrdersDto} from '../../../dto/orders.dto';
import {StockService} from '../../../services/stock.service';
import {SweetalertUtil} from '../../../util/sweetalert.util';
import {OrdersUpdateService} from './../../../services/order-update.service';
import {OrdersService} from './../../../services/orders.service';

@Component({
  selector: 'app-orders-details',
  standalone: true,
  imports: [RouterModule,CurrencyPipe],
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
  swal!: SweetalertUtil;
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
    this.dataAtual = new Date().toLocaleString('en-CA', { hour12: false }).replace(',', '');
    this.swal = new SweetalertUtil();
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
      }, error: (err: Error)=>{
        this.swal.erroItem(`Erro. Causa: ${err}`)
      }
    })
  }

  getOrderById(quantidade:number){
    this.ordersService.getOrder().subscribe({
      next: (res) => {
        this.pedidos = res.data;
        this.adminLogado = "2";
        this.addLogOrder(+this.adminLogado,this.pedidos[this.pedidos.length - 1].idPedido,"em_preparação");
        let meuPedido = this.pedidos[this.pedidos.length - 1];
        this.addItemToOrder(meuPedido.idPedido,+this.id, quantidade,meuPedido.valorTotal);
        this.ordersUpdateService.notifyPedidosUpdated(this.pedidos);
        this.getOrders();
      }, error: (err: Error)=>{
        this.swal.erroItem(`Erro. Causa: ${err}`)
      }
    })
  }

  addItemToOrder(pedidoIdItem:number, itemId:number, quantidade:number, subtotal:number){
    this.ordersService.addItemToOrder(pedidoIdItem, itemId, quantidade, subtotal).subscribe({
      next: (res:any)=>{
        localStorage.setItem('novoPedido', JSON.stringify(res.data));
      }, error: (err: Error)=>{
        this.swal.erroItem(`Erro. Causa: ${err}`)
      }
    })
  }

  voltar():void{
    this.quantidade = 1;
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

  addOrder(idClient:number, dataPedido:string, valorTotal:number, quantidade:number,statusPedido:string){
    this.ordersService.addOrder(idClient, dataPedido, valorTotal, statusPedido, quantidade).subscribe({
      next: (res:any)=>{
        this.getOrderById(quantidade);
      }, error: (err: Error)=>{
        this.swal.erroItem(`Erro. Causa: ${err}`)
      }
    })
    this.voltar();
  }

  getOrders(){
    this.ordersService.getOrder().subscribe({
      next:()=>{
        this.swal.carregandoDados("Adicionando novo item ao pedido","Item adicionado ao pedido.");
      }, error: (err: Error)=>{
        this.swal.erroItem(`Erro. Causa: ${err}`)
      }
    })
  }


  addLogOrder(idAdmin:number, idPedido:number, statusAlteradoPara:string){
    this.ordersService.addLogOrder(idAdmin, idPedido, statusAlteradoPara).subscribe({
      next: (res:any)=>{
        //
      }, error: (err: Error)=>{
        this.swal.erroItem(`Erro. Causa: ${err}`)
      }
    })
  }
}
