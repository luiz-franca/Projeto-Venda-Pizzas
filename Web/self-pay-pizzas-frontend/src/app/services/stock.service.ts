import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:5000/v1';

  constructor(private http: HttpClient) { }

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
