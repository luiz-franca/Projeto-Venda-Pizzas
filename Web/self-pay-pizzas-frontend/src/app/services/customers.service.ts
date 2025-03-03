import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private apiUrl = 'http://localhost:5000/v1';

  constructor(private http: HttpClient) { }

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
