import { Component } from '@angular/core';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';

@Component({
  selector: 'app-brand-detail',
  imports: [CustomTitleComponent],
  templateUrl: './brand-detail.component.html',
  styleUrl: './brand-detail.component.scss'
})
export class BrandDetailComponent {
  public title:string = 'New Brand';
}
