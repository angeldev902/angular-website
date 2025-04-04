import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  standalone: true
})
export class CustomButtonComponent {
  @Input() className: string = 'btn'; // Clase CSS por defecto
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (this.onClick.observed) {
      this.onClick.emit();
    }
  }

}
