import {Component} from '@angular/core';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import {Router,RouterModule} from '@angular/router';
import {AuthService} from './../../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  loginForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
        usuario: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

    onSubmit(): void {
      if (this.loginForm.valid) {
        const { usuario, password } = this.loginForm.value;

        this.authService.login(usuario, password).subscribe({
          next: () => {
            this.router.navigate(['/dashboard']);
          },
          error: () => {
            this.errorMessage = 'Credenciais inválidas!';
          },
        });
      }
    }
}
