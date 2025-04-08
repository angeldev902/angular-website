import { Component, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';

@Component({
  selector: 'app-products-list',
  imports: [CustomTableComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  private readonly apiService = inject(ApiService);

  columns: { key: string; label: string; type?: 'text' | 'currency' | 'date' }[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name'  },
    { key: 'code', label: 'Code' },
    { key: 'price', label: 'Price', type: 'currency' },
    { key: 'createdAt', label: 'Created At', type: 'date' }
  ];

  totalProducts = 0;
  limit = 5;
  products:any[] = [];

  ngOnInit(): void{
    this.fetchPage(0);
  }

  deleteProduct(product: any) {
    console.log('Eliminar:', product);
  }

  fetchPage(pageIndex: number) {
    const offset = pageIndex + 1; // Enviamos la página 1-based al backend
    let params = {
      offset,
      limit: this.limit
    }
    this.apiService.requestGet('productPage', params).subscribe(res => {
      console.log('Products', res);
      this.products = res.data;
      this.totalProducts = res.total;
    });
  }
}
