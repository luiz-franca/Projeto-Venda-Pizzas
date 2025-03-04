import { Component,Input} from '@angular/core';
import {CurrencyPipe,SlicePipe} from '@angular/common';

@Component({
  selector: 'app-items-detail',
  standalone: true,
  imports: [CurrencyPipe,SlicePipe],
  templateUrl: './items-detail.component.html',
  styleUrl: './items-detail.component.css'
})
export class ItemsDetailComponent {
  statusPedido!: string;
  valorTotal!:number;
  desconto!: number;
  valorComDesconto!:number;
  pedidos!: any[];
  quantidade!: number;
  @Input() item: any[] = [];

  constructor(){
    this.quantidade = 0;
    this.valorTotal = 0;
    this.valorTotal = +(this.valorTotal * this.quantidade).toFixed(2);
  }

  ngOnInit(){
    this.statusPedido = this.item[0].statusPedido;
    this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
    this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
    this.calcularTotal(this.item);
  }

  calcularTotal(list: any[]) {
    list.forEach(element => {
      this.valorTotal += element.valorTotal;
    });
    this.desconto = +((this.valorTotal / 100) * 10).toFixed(2);
    this.valorComDesconto = +(this.valorTotal - this.desconto).toFixed(2);
  }

}
