import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SHARED_IMPORTS } from '../../core/shared-imports';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { CustomInputComponent } from '../../shared/custom-input/custom-input.component';
import { ApiService } from '../../core/services/api.service';
@Component({
  selector: 'app-login',
  imports: [CustomInputComponent, CustomButtonComponent, ...SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;
  emailControl:FormControl;
  passwordControl:FormControl;

  constructor(private fb: FormBuilder, private apiService:ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });

    this.emailControl = this.loginForm.get('email') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.apiService.auth('login', this.loginForm.value).subscribe(res => {
        console.log('Se inicio sesión', res);
      });
    }
  }
}
