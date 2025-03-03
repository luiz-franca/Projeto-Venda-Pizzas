import {CurrencyPipe,DatePipe} from '@angular/common';
import {AfterViewInit,Component} from '@angular/core';
import * as bootstrap from 'bootstrap';
import {AuthService} from '../../services/auth.service';
import {CustomersService} from '../../services/customers.service';
import {OrdersService} from './../../services/orders.service';
import {StockService} from './../../services/stock.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe,DatePipe],
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
  constructor(
    private authService: AuthService,
    private customerService:CustomersService,
    private stockService: StockService,
    private ordersService: OrdersService
  ){
    this.startBootstrap();
    this.customers = [];
    this.employees = [];
    this.stock = [];
    this.orders = [];
    this.orders = [];
    this.itemOrders = [];
    this.paymentTotal = 0;
    this.pedidos = [];
    this.uniqueClients = [];
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

    // this.getOrderById(this.idCliente);
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
      this.startBootstrap();
    }

    ngAfterViewInit(): void {
      const feather = (window as any).feather;
      if (feather) {
        feather.replace({ 'aria-hidden': 'true' });
      }

      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      if (ctx) {
        const Chart = (window as any).Chart;
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ],
            datasets: [{
              data: [
                15339,
                21345,
                18483,
                24003,
                23489,
                24092,
                12034
              ],
              lineTension: 0,
              backgroundColor: 'transparent',
              borderColor: '#007bff',
              borderWidth: 4,
              pointBackgroundColor: '#007bff'
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    }

    // ngOnDestroy(): void {
    //   window.removeEventListener('storage', this.checkNovoPedido.bind(this));
    // }

    checkNovoPedido(event: StorageEvent): void {
      if (event.key === 'novoPedido' && event.newValue !== null) {
        this.novoPedido = JSON.parse(event.newValue);
        this.novoPedidoCarregado();
      }
    }

    checkNovoPagamento(event: StorageEvent): void {
      if (event.key === 'pagamento' && event.newValue !== null) {
        this.novoPagamento = JSON.parse(event.newValue);
        this.novoPagamentoCarregado();
      }
    }


    carregarDadosSucesso(){
      (window as any).Swal.fire({
        title: 'Sucesso!',
        text: 'Dados carregados com sucesso',
        icon: 'success',
        confirmButtonText: 'Fechar',
        timer: 2000,
        timerProgressBar: true,
      });
    }

    carregarDadosErro(){
      (window as any).Swal.fire({
        title: 'Atenção!',
        text: 'Erro ao carregar dados',
        icon: 'error',
        confirmButtonText: 'Fechar',
        timer: 2000,
        timerProgressBar: true,
      });
    }

    novoPedidoCarregado(){
      (window as any).Swal.fire({
        title: 'Atenção!',
        text: 'Um novo pedido foi solicitado',
        icon: 'warning',
        confirmButtonText: 'Fechar',
      });
      this.getItemOrder();
      localStorage.removeItem('novoPedido');
    }

    novoPagamentoCarregado(){
      (window as any).Swal.fire({
        title: 'Atenção!',
        text: 'Um novo pedido foi pago!',
        icon: 'warning',
        confirmButtonText: 'Fechar',
      });
      this.getItemOrder();
      localStorage.removeItem('pagamento');
    }

    deletarDados(id: number, type: string) {
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
            this.deleteAdmins(id);
            (window as any).Swal.fire("Excluído!", "O registro foi removido com sucesso.", "success");
          }else {
            this.deleteCustomers(id);
            (window as any).Swal.fire("Excluído!", "O registro foi removido com sucesso.", "success");
          }
        }
      });
    }

    carregandoDados(){
      let timerInterval:any;
      (window as any).Swal.fire({
        title: "Carregando...",
        html: "Alterando estatus do pedido",
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
          this.getOrder();
          this.sucessoItem();
        }
      });
    }

    sucessoItem(){
      (window as any).Swal.fire({
        position: "top-end",
        icon: "success",
        title: "O status do pedio foi alterado",
        showConfirmButton: false,
        timer: 1500
      });
    }

    startBootstrap(){
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }

  getAdmins(){
    this.customerService.getAdmins().subscribe({
      next: (data:any) => {
        this.carregarDadosSucesso();
        this.employees = data.response;
      },error:() => {
        this.carregarDadosErro();
      }
    });
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (data:any) => {
        this.customers = data.data;
      },
      error:() => {
        this.carregarDadosErro();
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

  calcularPizzasPossiveis(insumos: any[]): number {
    const ingredientesPorPizza: any = {
      'Queijo Mussarela': 2,
      'Presunto': 1,
      'Queijo Ralado': 1,
      'Calabresa Fatiada': 1,
      'Frango Desfiado': 1,
      'Catupiry': 1,
      'Molho de Tomate': 1,
      'Orégano': 0.1,
      'Cebola': 0.5,
      'Tomate': 1,
      'Chocolate ao Leite': 2,
      'Creme de Leite': 1,
      'Granulado': 0.2,
      'Raspas de Chocolate': 0.2,
      'Confeitos': 0.2,
      'Morango': 1,
      'Banana': 1,
      'Leite Condensado': 1
    };

    const pizzasPorIngrediente = insumos.map(insumo => {
      const quantidadeNecessaria = ingredientesPorPizza[insumo.nomeInsumo];
      return quantidadeNecessaria ? Math.floor(insumo.quantidade / quantidadeNecessaria) : Infinity;
    });

    return Math.min(...pizzasPorIngrediente);
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

  voltar():void{
    let pedido = document.getElementById('orders-details') as HTMLElement;
    pedido.style.display = "none";
    // this.location.back();
  }

  verPedidos(){
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "block";
    this.voltar();
  }

  imprimir(indice: number){
    console.log(indice)
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
    this.carregandoDados();
  }

  close(){
    let modal = document.getElementById('modal-status') as HTMLElement;
    modal.style.display = "none";
  }

  edit(index: number){
    this.idClientePedido = index;
    console.log(this.idClientePedido)
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
