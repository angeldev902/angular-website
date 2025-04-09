import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SHARED_IMPORTS } from '../../../core/shared-imports';
import { CustomButtonComponent } from '../../../shared/custom-button/custom-button.component';
import { CustomInputComponent } from '../../../shared/custom-input/custom-input.component';
import { MessagesService } from '../../../core/services/messages.service';
@Component({
  selector: 'app-register',
  imports: [CustomButtonComponent, CustomInputComponent, ...SHARED_IMPORTS],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true
})
export class RegisterComponent {
  registerForm: FormGroup;

  firstNameControl:FormControl;
  lastNameControl:FormControl;
  emailControl:FormControl;
  phoneControl:FormControl;
  passwordControl:FormControl;

  constructor(private fb:FormBuilder, private messagesService: MessagesService){
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{1,10}$')]],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{7,}$'
        ),
      ])]
    })

    this.firstNameControl = this.registerForm.get('firstName') as FormControl;
    this.lastNameControl = this.registerForm.get('lastName') as FormControl;
    this.emailControl = this.registerForm.get('email') as FormControl;
    this.phoneControl = this.registerForm.get('phone') as FormControl;
    this.passwordControl = this.registerForm.get('password') as FormControl;
  }

  submit(){
    if (this.registerForm.valid) {
    console.log('I will register new user', this.registerForm.value);
    this.messagesService.message('User registered');
    }
  }
}
