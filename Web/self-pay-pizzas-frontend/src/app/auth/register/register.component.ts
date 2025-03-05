import {Component} from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';
import {
  Router,RouterModule
} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
      this.registerForm = this.fb.group({
        username: ['', [Validators.required, Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        login: ['', [Validators.required, Validators.maxLength(10)]],
        customerCode: ['', [Validators.required, Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.maxLength(8)]],
      });
    }

    onSubmit(): void {
      if (this.registerForm.valid) {
        const { username, email,login, customerCode, password } = this.registerForm.value;
        if(customerCode === "adm012025"){
          this.authService.register(username,email,login, password).subscribe({
            next: () => {
              this.router.navigate(['auth/admin']);
            },
            error: () => {
              this.errorMessage = 'Credenciais inválidas!';
            },
          });
        }else {
          this.errorMessage = 'Credenciais inválidas!';
        }
      }
    }
}
