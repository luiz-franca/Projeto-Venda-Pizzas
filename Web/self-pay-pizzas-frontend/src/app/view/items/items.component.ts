import { Component } from '@angular/core';
import {CommonModule,CurrencyPipe} from '@angular/common';
import {Router,RouterModule} from '@angular/router';
import {ItemDto} from '../../dto/item.dto';
import {AuthService} from '../../services/auth.service';
import {StockService} from '../../services/stock.service';
import {PaymentComponent} from '../payment/payment.component';
import {CustomersComponent} from './../customers/customers.component';
import { OrdersDetailsComponent } from './../orders/orders-details/orders-details.component';
import { BootstrapUtil } from '../../util/bootstrap.util';

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
    bootstrap!: BootstrapUtil;

    constructor(private authService: AuthService, private stockService: StockService,private router: Router){
      this.bootstrap = new BootstrapUtil();
      this.bootstrap.startBootstrap();
      this.itens = [];
    }

    ngOnInit(){
      this.getItem();
      this.bootstrap.startBootstrap();
      let usuarioLogado = localStorage.getItem('usuarioLogado') || '{}';
      let usuarioObj = JSON.parse(usuarioLogado);
      this.idCliente = usuarioObj[0].idCliente;
      this.nome = usuarioObj[0].nomeCliente;
      this.statusCompra = localStorage.getItem('compra') || "";
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
      this.id = `${id}`;
      let pedido = document.getElementById('orders-details') as HTMLElement;
      pedido.style.display = "block";
      let lista = document.getElementById('customers') as HTMLElement;
      lista.style.display = "none";
      return id;
    }

    voltar():void{
      let pedido = document.getElementById('orders-details') as HTMLElement;
      pedido.style.display = "none";
    }

}
