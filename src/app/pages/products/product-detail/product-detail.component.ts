import { Component } from '@angular/core';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';

@Component({
  selector: 'app-product-detail',
  imports: [CustomTitleComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  public title:string = 'New Product';
}
