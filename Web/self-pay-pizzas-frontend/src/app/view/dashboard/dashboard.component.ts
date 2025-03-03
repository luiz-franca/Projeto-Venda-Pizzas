import {DatePipe,TitleCasePipe} from '@angular/common';
import {AfterViewInit,Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CustomersService} from '../../services/customers.service';
import {BootstrapUtil} from '../../util/bootstrap.util';
import {ChartUtil} from '../../util/chart.util';
import {SweetalertUtil} from '../../util/sweetalert.util';
import {OrdersService} from './../../services/orders.service';
import {StockService} from './../../services/stock.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe,TitleCasePipe],
templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit{
  customers!: any[];
  employees!: any[];
  stock!: any[];
  column!: any[];
  columnCustomers!: any[];
  columnStock!: any[];
  columnOrders!: any[];
  orders!: any[];
  itemOrders!: any[];
  novoPedido!:string;
  novoPagamento!:string;
  paymentTotal!: number;
  pedidos!: any[];
  idCliente!: number;
  uniqueClients!: any[];
  idClientePedido!: number;
  swal!: SweetalertUtil;
  chart!:ChartUtil;
  bootstrap!: BootstrapUtil;
  constructor(
    private authService: AuthService,
    private customerService:CustomersService,
    private stockService: StockService,
    private ordersService: OrdersService
  ){
    this.bootstrap.startBootstrap();
    this.customers = [];
    this.employees = [];
    this.stock = [];
    this.orders = [];
    this.orders = [];
    this.itemOrders = [];
    this.paymentTotal = 0;
    this.pedidos = [];
    this.uniqueClients = [];
    this.swal = new SweetalertUtil();
    this.chart = new ChartUtil();
    this.bootstrap = new BootstrapUtil();
    this.column = [
      {field:"id", header: "ID"},
      {field:"nome", header: "Nome"},
      {field:"email", header: "E-mail"},
    ];
    this.columnStock = [
      {field:"id", header: "ID"},
      {field:"insumo", header: "Insumo"},
      {field:"quantidade", header: "Quantidade"},
    ];
    this.columnCustomers = [
      {field:"id", header: "ID"},
      {field:"nome", header: "Nome"},
      {field:"telefone", header: "Tel"},
      {field:"email", header: "E-mail"},
      {field:"endereco", header: "Endereço"},
    ];
    this.columnOrders = [
      {field:"idPedido", header: "ID"},
      {field:"idClient", header: "Cliente"},
      {field:"dataPedido", header: "Data"},
      {field:"statusPedido", header: "Status"},
      {field:"quantidade", header: "Quantidade"}
    ];
    if(localStorage.getItem('usuarioLogado') != null){
      let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
      let usuarioObj = JSON.parse(usuarioLogado);
      let nome = usuarioObj[0].nomeCliente;
      this.idCliente = usuarioObj[0].idCliente || null;
    }

    this.getAdmins();
    this.getCustomers();
    this.getStock();
    this.getItemOrder();
    this.getOrder();
    this.getClientes();
    this.novoPedido = localStorage.getItem('novoPedido') || "";
    this.novoPagamento = localStorage.getItem('pagamento') || "";

  }

    ngOnInit(){
      window.addEventListener('storage', this.checkNovoPedido.bind(this));
      window.addEventListener('storage', this.checkNovoPagamento.bind(this));
      this.bootstrap.startBootstrap();
    }

    ngAfterViewInit(): void {
      this.chart.carregarFeather();
      this.chart.carregarChart();
    }

    ngOnDestroy(): void {
      window.removeEventListener('storage', this.checkNovoPedido.bind(this));
    }

    checkNovoPedido(event: StorageEvent): void {
      if (event.key === 'novoPedido' && event.newValue !== null) {
        this.novoPedido = JSON.parse(event.newValue);
        this.swal.novoPedidoCarregado(this.getItemOrder.bind(this));
      }
    }

    checkNovoPagamento(event: StorageEvent): void {
      if (event.key === 'pagamento' && event.newValue !== null) {
        this.novoPagamento = JSON.parse(event.newValue);
        this.swal.novoPagamentoCarregado(this.getItemOrder.bind(this));
      }
    }


    deletarPorid(id: number, type: string){
      this.swal.deletarDados(
        id,
        type,
        this.deleteAdmins.bind(this),
        this.deleteCustomers.bind(this),
      )
    }

  getAdmins(){
    this.customerService.getAdmins().subscribe({
      next: (data:any) => {
        this.swal.carregarDadosSucesso();
        this.employees = data.response;
      },error:() => {
        this.swal.carregarDadosErro();
      }
    });
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (data:any) => {
        this.customers = data.data;
      },
      error:() => {
        this.swal.carregarDadosErro();
      }
    });
  }

  getStock(){
    this.stockService.getStock().subscribe({
      next: (data:any) => {
        this.stock = data.data;
      }
    });
  }

  getItemOrder(){
    this.ordersService.getItemOrder().subscribe({
      next: (res:any) => {
        this.itemOrders = res.data;
      }
    })
  }

  getOrder(){
    this.ordersService.getOrder().subscribe({
      next: (res:any) => {
        this.orders = res.data;
      }
    })
  }

  logout(){
    this.authService.logout();
  }

  deleteAdmins(id: number){
    this.customerService.deleteAdmins(id).subscribe({
      next:() =>{
        this.getAdmins();
      }
    });
  }

  deleteCustomers(id: number){
    this.customerService.deleteCustomers(id).subscribe({
      next:() =>{
        this.getCustomers();
      }
    });
  }

  getOrderById(id: number, status: string){
    this.ordersService.getOrderById(id).subscribe({
      next: (res:any) => {
        this.pedidos = res.data;
        this.setUpdateOrder(this.pedidos,status);
      }
    });
  }

  changeStatus(status: string){
    this.getOrderById(this.idClientePedido, status);
    let modal = document.getElementById('modal-status') as HTMLElement;
    modal.style.display = "none";
    this.swal.carregandoDados(
      "Alterando estatus do pedido",
      "O status do pedio foi alterado",
      this.getOrder.bind(this) );
  }

  close(){
    let modal = document.getElementById('modal-status') as HTMLElement;
    modal.style.display = "none";
  }

  edit(index: number){
    this.idClientePedido = index;
    let pedido = document.getElementById('modal-status') as HTMLElement;
    pedido.style.display = "flex";
  }

  updateOrder(id:number,idClient:number, dataPedido:string, valorTotal:number, statusPedido:string, quantidade:number){
    this.ordersService.updateOrder(id,idClient, dataPedido, valorTotal, statusPedido, quantidade).subscribe({
      next: (res:any)=>{

      }
    })
  }

  setUpdateOrder(list: any[],status: string){
    const date = new Date().toLocaleString('en-CA', { hour12: false }).replace(',', '');
    list.forEach(element => {
      this.updateOrder(element.idPedido,element.idClient, date, element.valorTotal, status, element.quantidade);
    });
  }

  getClientes(){
    this.authService.getClientes().subscribe({
      next: (res:any) => {
        this.uniqueClients = res.data;
      }
    });
  }

  filteredOrders(client: any){
    return this.orders.filter(o => o.idClient === client.idCliente);
  }

  openAccordion(index: number) {
    let open = document.getElementById(`collapse${index}`) as HTMLElement;
    open.style.display = open.style.display === "none" ? "block" : "none";
  }
}
