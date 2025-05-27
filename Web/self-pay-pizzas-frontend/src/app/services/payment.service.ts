import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = '';
  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = this.config.apiUrl;
  }

  addPayment(idPedido:number, valor:number, formaPagamento:string):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/pagamento`,{
      idPedido, valor, formaPagamento
    })
  }
}
