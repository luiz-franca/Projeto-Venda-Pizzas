import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:5000/v1';
  constructor(private http:HttpClient) { }

  addPayment(idPedido:number, valor:number, formaPagamento:string):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/pagamento`,{
      idPedido, valor, formaPagamento
    })
  }
}
