import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { ConfigService } from '../config.service';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = '';

  constructor(private http: HttpClient, private config: ConfigService) {
    this.apiUrl = this.config.apiUrl;
  }

  getAdmins(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/admins`);
  }

  deleteAdmins(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/admins/${id}`);
  }

  updateAdmins(id:number,nomeAdmin:string, emailAdmin:string, loginAdmin:string, senhaAdmin:string):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/admins/${id}`,{
      nomeAdmin, emailAdmin, loginAdmin, senhaAdmin
    });
  }

  getCustomers(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/clientes`);
  }


  deleteCustomers(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/clientes/${id}`);
  }

  updateCustomers(id:number,nomeCliente:string, telefone:string, endereco:string, email:string):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/clientes/${id}`,{
      nomeCliente, telefone, endereco, email
    });
  }

}
