import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED_IMPORTS } from '../../core/shared-imports';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: SHARED_IMPORTS,
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  standalone: true
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() id:string = '';
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
}
