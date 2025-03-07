import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ClienteInfoCard} from '../../dto/cliente-info-card';
import {ItemDto} from '../../dto/item.dto';
import {OrdersDto} from '../../dto/orders.dto';
import {PaymentService} from '../../services/payment.service';
import {SweetalertUtil} from '../../util/sweetalert.util';
import {OrdersService} from './../../services/orders.service';
import {StockService} from './../../services/stock.service';
import { OrdersUpdateService } from './../../services/order-update.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})


export class PaymentComponent {
  paymentMethod: string;
  deliveryMethod: string;
  pixKey: string;
  qrCodeUrl: string;
  pedidos!: OrdersDto[];
  desconto!: number;
  valorTotal!: number;
  quantidade!: number;
  valorComDesconto!: number;
  idCliente!: number;
  stock!: any;
  item!: ItemDto[];
  stockbyId!: any;
  stockList!: any[];
  paymentForm: FormGroup;
  clienteInfo!: ClienteInfoCard;
  swal!: SweetalertUtil;
  itemOrder!: any[];
  nome!:string;
  pedidosFinalizados!: any[];
  idPedido!: number;

  constructor(
  private paymentService: PaymentService,
  private ordersService: OrdersService,
  private stockService: StockService,
  private fb: FormBuilder,
  private ordersUpdateService: OrdersUpdateService,
){
    this.pedidos = [];
    this.item = [];
    this.stockList = [];
    this.pedidosFinalizados = [];
    this.quantidade = 0;
    this.valorTotal = 0;
    this.valorTotal = +(this.valorTotal * this.quantidade).toFixed(2);
    this.clienteInfo = new ClienteInfoCard();
    this.swal = new SweetalertUtil();
    this.clienteInfo = {
      cardName: 'Nome cliente',
      cardNumber: '4785985636521452',
      cardExpiry: '10/30',
      cardCvv: '123'
    };
    this.paymentForm = this.fb.group({
      deliveryMethod: ['retirada', Validators.required],
      paymentOnDelivery: [''],
      paymentMethod: ['', Validators.required],
      cardName: ['', [Validators.required, Validators.minLength(3)]],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardExpiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])/[0-9]{2}')]],
      cardCvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
    this.paymentMethod = '';
    this.deliveryMethod = '';
    this.pixKey = '00020126330014BR.GOV.BCB.PIX0111+5511999999995520400005303986540540.005802BR5920Fulano de Tal6009SAO PAULO62070503***6304F9B3';
    this.qrCodeUrl = '';
  }

  ngOnInit(){
    let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
    let usuarioObj = JSON.parse(usuarioLogado);
    this.idCliente = usuarioObj[0].idCliente;
    this.nome = usuarioObj[0].nomeCliente;

    this.getItemOrder();
    this.getOrder(this.idCliente);
    this.quantidade = 1;
    this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
    this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
    this.getStock();
    let novoPedido = localStorage.getItem('pagamento') || '{}';

    this.paymentForm.get('paymentMethod')?.valueChanges.subscribe(value => {
      this.paymentMethod = value;
      this.onPaymentMethodChange();
    });
    this.ordersUpdateService.getPedidosUpdatedListener().subscribe((pedidos: any[]) => {
      this.itemOrder = [];
      this.valorTotal = 0;
      this.desconto = 0;
      this.valorComDesconto = 0;
      this.getItemOrder();
    });
  }

  getItemOrder() {
    this.ordersService.getItemOrder().subscribe({
      next: (res: any) => {
        this.itemOrder = res.data;
        this.itemOrder.forEach((element:any) => {
          this.getItemOrderNameById(element.idPedidoItem);
        });
      },error:(err:Error)=>{
        this.swal.erroItem(`Erro ao consultar os itens de uma ordem: ${err.cause}`)
      }
    });
  }

  getOrder(id:number){
    this.ordersService.getOrderById(id).subscribe({
      next: (res: any) => {
        this.pedidosFinalizados = res.data;
        this.idPedido = this.pedidosFinalizados[0].idPedido;
      }
    })
  }

  getItemOrderNameById(id: number) {
    this.ordersService.getItemOrderNameById(id).subscribe({
      next: (res: any) => {
        const item = res.data[0];
        if (item && item.nomeCliente === this.nome) {
          this.pedidos.push(item);
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

  onPaymentMethodChange(): void {
    if (this.paymentMethod === 'pix') {
      this.generatePixQrCode();
    }else {
      this.paymentForm.patchValue({
        cardName: this.clienteInfo.cardName,
        cardNumber: this.clienteInfo.cardNumber,
        cardExpiry: this.clienteInfo.cardExpiry,
        cardCvv: this.clienteInfo.cardCvv
      });
    }
  }

  onDeliveryMethodChange(): void {
    //
  }

  generatePixQrCode(): void {
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(this.pixKey)}`;
  }

  cancelarPagamento(){
    this.paymentForm.reset();
    this.paymentMethod = '';
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "block";
    let pagamento = document.getElementById('payment') as HTMLElement;
    pagamento.style.display = "none";
  }

  voltar(){
    let pagamento = document.getElementById('payment') as HTMLElement;
    pagamento.style.display = "none";
  }

  getStockById(id:number){
    this.stockService.getStockById(id).subscribe({
      next: (res:any)=>{
        this.stockbyId = res.data;
        if (!this.stockList.includes(this.stockbyId[0])) {
          this.stockList.push(this.stockbyId[0]);
        }
        this.stockList.forEach(element => {
          this.updateStock(element.idEstoque,element.idEstoque,element.nomeInsumo,element.quantidade - 1)
        })
      }
    })
  }

  updateStock(id: number,idEstoque: number,nomeInsumo:string,quantidade:number){
    this.stockService.updateStock(id,idEstoque,nomeInsumo,quantidade).subscribe({
      next: (res:any)=>{

      }
    })
  }


  updateOrder(id:number,idClient:number, dataPedido:string, valorTotal:number, statusPedido:string, quantidade:number){
    this.ordersService.updateOrder(id,idClient, dataPedido, valorTotal, statusPedido, quantidade).subscribe({
      next: (res:any)=>{

      }
    })
  }

  setUpdateOrder(){
    this.getOrder(this.idCliente);
    const date = new Date().toLocaleString('en-CA', { hour12: false }).replace(',', '');
    this.pedidosFinalizados.forEach(element => {
      this.updateOrder(element.idPedido,element.idClient, date, element.valorTotal, "em_preparação", element.quantidade);
    });
  }

  efetuarPagamento(idPedido:number, valor:number, formaPagamento:any){
    this.paymentService.addPayment(idPedido, valor, formaPagamento).subscribe({
      next: (res:any)=>{
        localStorage.setItem('pagamento', JSON.stringify("teste"));
        let stockItems = [1,8,11,12,14,20];
        stockItems.forEach((element:any, index:number) => {
          this.getStockById(element);
        });
        this.setUpdateOrder();
      }
    })
  }

  getStock(){
    this.stockService.getStock().subscribe({
      next: (res:any)=>{
        this.stock = res.data;
      }
    })
  }

  onSubmit(idPedido: number,valor:number, formaPagamento:any){
    if (this.paymentForm.invalid) {
      return;
    }
    this.efetuarPagamento(idPedido, valor, formaPagamento);
    this.voltar();
    this.swal.carregandoDados("Efetuando pagamento","Pagamento feito com sucesso.");
  }

  copyToClipboard() {
    let copyText = document.getElementById("pixKey") as HTMLElement;
    navigator.clipboard.writeText(copyText.innerHTML);
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

}
