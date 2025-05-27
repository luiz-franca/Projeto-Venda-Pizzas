import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = '';

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = this.config.apiUrl;
  }

  getItems(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/itens`);
  }

  getStock(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/estoque`);
  }

  addItems(nomeItem:any, precoItem:any, descricaoItem:any, imagemUrl:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/itens`,{
      nomeItem, precoItem, descricaoItem, imagemUrl
    })
  }

  getItemsById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/itens/${id}`);
  }

  removeStock(id: number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/estoque/${id}`);
  }

  getStockById(id: number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/estoque/${id}`);
  }

  updateStock(id: number,idEstoque:number,nomeInsumo:string,quantidade:number):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/estoque/${id}`,{
      idEstoque,nomeInsumo,quantidade
    });
  }
}
