import { Component } from '@angular/core';
import { CustomTitleComponent } from '../../../shared/custom-title/custom-title.component';

@Component({
  selector: 'app-category-detail',
  imports: [CustomTitleComponent],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss'
})
export class CategoryDetailComponent {
  public title:string = 'New Category';
}
