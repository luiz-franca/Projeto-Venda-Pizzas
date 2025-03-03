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
  @Input() item: any[] = [];

  constructor(){
  }

  ngOnInit(){
    this.statusPedido = this.item[0].statusPedido;
  }

}
