import {Component} from '@angular/core';
import {ActivatedRoute,NavigationEnd,Router,RouterOutlet} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'self-pay-pizzas-frontend';
  rota:string;

  constructor(
    private router: Router,
    private activate: ActivatedRoute,
    private authService: AuthService
  ){
    this.rota = "";
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.rota = event.urlAfterRedirects;
      }
    });
  }

  logout(){
    this.authService.logout();
  }

  voltar():void{
    let pedido = document.getElementById('orders-details') as HTMLElement;
    pedido.style.display = "none";
  }

  verPedidos(){
    let pedido = document.getElementById('customers') as HTMLElement;
    pedido.style.display = "block";
    this.voltar();
  }

  verItems(){
    this.router.navigate(['/items']);
  }

  verConta(){
    this.router.navigate(['/orders']);
  }
}
