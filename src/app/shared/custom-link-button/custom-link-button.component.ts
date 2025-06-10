import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED_IMPORTS } from '../../core/shared-imports';

@Component({
  selector: 'app-custom-link-button',
  imports: [SHARED_IMPORTS],
  templateUrl: './custom-link-button.component.html',
  styleUrl: './custom-link-button.component.scss',
  standalone: true
})
export class CustomLinkButtonComponent {
  @Input() className: string = 'btn';
  @Input() name: string = '';
  @Input() routerLink!: string;
  @Input() disabled: boolean = false;

}
