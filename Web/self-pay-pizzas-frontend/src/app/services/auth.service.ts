import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/v1';

  constructor(private http: HttpClient, private router: Router) {}

  login(loginAdmin: string, senhaAdmin: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/admins/login`, { loginAdmin, senhaAdmin })
      .pipe(
        tap(response => {
          localStorage.setItem('funcionarioLogado',
            response.data.checkAdmin[0].idAdmin
          );
          localStorage.setItem('tokenAdmin', response.data.token);
        })
      );
  }

  register(nomeAdmin:string, emailAdmin:string, loginAdmin:string, senhaAdmin:string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/admins`, {
      nomeAdmin, emailAdmin, loginAdmin, senhaAdmin
    });
  }

  customerRegister(nomeCliente:string, telefone:string, endereco:string, email:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/clientes`, {
      nomeCliente, telefone, endereco, email
    }).pipe(
      tap(response => {
        localStorage.setItem('usuarioLogado',
          JSON.stringify(response.data[1])
        );
        localStorage.setItem('token', response);
      })
    );
  }

  isLoggedIn(): boolean {
    return (!!localStorage.getItem('token') && !!localStorage.getItem('usuarioLogado')) || (!!localStorage.getItem('tokenAdmin') && !!localStorage.getItem('funcionarioLogado'));
  }

  logout(): void {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  logoutAdmin():void{
    localStorage.removeItem('funcionarioLogado');
    localStorage.removeItem('tokenAdmin');
  }


  getClientes():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/clientes`);
  }
}
