import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrdersService } from './orders.service';
import { OrdersDto } from './../dto/orders.dto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersUpdateService {
  private pedidosUpdated = new Subject<OrdersDto[]>();
  private pedidosFinalizadosSource = new BehaviorSubject<any[]>([]);
  pedidosFinalizados$ = this.pedidosFinalizadosSource.asObservable();

  constructor(private ordersService: OrdersService) {}

  // Método para enviar os pedidos atualizados
  notifyPedidosUpdated(pedidos: OrdersDto[]) {
    this.pedidosUpdated.next(pedidos);
  }

  // Método para ouvir as atualizações
  getPedidosUpdatedListener() {
    return this.pedidosUpdated.asObservable();
  }

  setPedidosFinalizados(pedidos: any[]) {
    this.pedidosFinalizadosSource.next(pedidos);
  }

  // Você também pode adicionar métodos para buscar e atualizar pedidos diretamente no serviço
}
