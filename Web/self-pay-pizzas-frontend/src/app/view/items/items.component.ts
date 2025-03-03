import { Component } from '@angular/core';
import {CommonModule,CurrencyPipe} from '@angular/common';
import {Router,RouterModule} from '@angular/router';
import * as bootstrap from 'bootstrap';
import {ItemDto} from '../../dto/item.dto';
import {AuthService} from '../../services/auth.service';
import {StockService} from '../../services/stock.service';
import {PaymentComponent} from '../payment/payment.component';
import {CustomersComponent} from './../customers/customers.component';
import { OrdersDetailsComponent } from './../orders/orders-details/orders-details.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [RouterModule,OrdersDetailsComponent,CustomersComponent,CurrencyPipe,CommonModule,PaymentComponent],
templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  itens:ItemDto[];
    id!: string;
    nome!: string;
    idCliente!: string;
    statusCompra!: string;

    constructor(private authService: AuthService, private stockService: StockService,private router: Router){
      this.startBootstrap();
      this.itens = [];
    }

    ngOnInit(){
      this.getItem();
      this.startBootstrap();
      let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
      let usuarioObj = JSON.parse(usuarioLogado);
      this.idCliente = usuarioObj[0].idCliente;
      this.nome = usuarioObj[0].nomeCliente;
      this.statusCompra = localStorage.getItem('compra') || "";
    }

    startBootstrap(){
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
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

    buscarOrderPorId(id: number):number{
      return id;
    }

    adicionarPedido(id:number):number{
      console.log('oi')
      this.id = `${id}`;
      let pedido = document.getElementById('orders-details') as HTMLElement;
      pedido.style.display = "block";
      let lista = document.getElementById('customers') as HTMLElement;
      lista.style.display = "none";
      return id;
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

    verConta(){
      this.router.navigate(['/orders']);
    }
}
