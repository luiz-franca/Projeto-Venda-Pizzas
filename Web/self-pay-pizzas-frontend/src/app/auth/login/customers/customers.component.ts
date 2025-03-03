import {Component} from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import {
  Router,RouterModule
} from '@angular/router';
import {AuthService} from './../../../services/auth.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(20)]],
      telefone: ['', [Validators.required, Validators.maxLength(11), Validators.pattern(/^\d+$/)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { username, telefone,address, email} = this.registerForm.value;

      this.authService.customerRegister(username, telefone,address,email).subscribe({
        next: () => {
          localStorage.setItem('token', 'cliente');
          this.router.navigate(['/items']);
        },
        error: () => {
          this.errorMessage = 'Credenciais inválidas!';
        },
      });
    }
  }
}
