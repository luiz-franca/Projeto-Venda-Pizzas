import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = 'http://localhost:5000/v1';
  constructor(private http: HttpClient) {

  }

  addItemToOrder(pedidoIdItem:number, itemId:number, quantidade:number, subtotal:number): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/pedidos-item`, {
      pedidoIdItem, itemId, quantidade, subtotal
    });
  }

  updateItemToOrder(id: number,pedidoIdItem:number, itemId:number, quantidade:number, subtotal:number): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/pedido-item/${id}`, {
      pedidoIdItem, itemId, quantidade, subtotal
    });
  }

  addOrder(idClient:number, dataPedido:string, valorTotal:number, statusPedido:string, quantidade:number): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/pedidos`, {
      idClient, dataPedido, valorTotal, statusPedido, quantidade
    });
  }

  updateOrder(id:number,idClient:number, dataPedido:string, valorTotal:number, statusPedido:string, quantidade:number): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/pedidos/${id}`, {
      idClient, dataPedido, valorTotal, statusPedido, quantidade
    });
  }

  addLogOrder(idAdmin:number, idPedido:number, statusAlteradoPara:string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/logs-pedido`, {
      idAdmin, idPedido, statusAlteradoPara
    });
  }

  getOrder(){
    return this.http.get<any>(`${this.apiUrl}/pedidos`);
  }

  getOrdersId(id: number){
    return this.http.get<any>(`${this.apiUrl}/pedidos/${id}`);
  }

  getOrderById(id:number){
    return this.http.get<any>(`${this.apiUrl}/pedidos/cliente/${id}`);
  }

  getItemOrderById(id: number){
    return this.http.get<any>(`${this.apiUrl}/pedidos-item/${id}`);
  }

  getItemOrderNameById(id: number){
    return this.http.get<any>(`${this.apiUrl}/pedidos-item-nomes/${id}`);
  }

  getItemOrderName(){
    return this.http.get<any>(`${this.apiUrl}/pedidos-item-nomes`);
  }

  getItemOrder():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/pedidos-item`);
  }

  getItem(){
    return this.http.get<any>(`${this.apiUrl}/itens`);
  }
}
