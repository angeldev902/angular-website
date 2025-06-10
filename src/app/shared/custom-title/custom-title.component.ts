import { Component, Input } from '@angular/core';
import { SHARED_IMPORTS } from '../../core/shared-imports';

@Component({
  selector: 'app-custom-title',
  imports: [SHARED_IMPORTS],
  templateUrl: './custom-title.component.html',
  styleUrl: './custom-title.component.scss',
  standalone: true
})
export class CustomTitleComponent {
  @Input() text: string = '';
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
  @Input() alignText: 'start' | 'center' | 'end' = 'start'; // Bootstrap text alignment
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'muted' = 'dark';
  @Input() subtitle?: string;
}
