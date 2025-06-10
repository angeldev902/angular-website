import { Component, inject } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { Product } from '../../../core/models/product.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import { CustomLinkButtonComponent } from '../../../shared/custom-link-button/custom-link-button.component';
@Component({
  selector: 'app-products-list',
  imports: [CustomTableComponent, CustomLinkButtonComponent, MatDialogModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  private readonly apiService = inject(ApiService);
  private readonly matDialog = inject(MatDialog);

  columns: { key: string; label: string; type?: 'text' | 'currency' | 'date' | 'object' }[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category', type: 'object' },
    { key: 'brand', label: 'Brand', type: 'object' },
    { key: 'price', label: 'Price', type: 'currency' }
  ];

  totalProducts = 0;
  limit = 5;
  products:Product[] = [];

  ngOnInit(): void{
    this.fetchPage(0);
  }

  fetchPage(pageIndex: number) {
    const offset = pageIndex + 1;
    let params = {
      offset,
      limit: this.limit
    }
    this.apiService.requestGet('productList', params).subscribe(res => {
      this.products = res.data;
      this.totalProducts = res.total;
    });
  }

  openDeleteDialog(product:any) {
      const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
        data: { title: 'Delete Product', message: `Do you want delete ${product.name} ?` },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.deleteProduct(product.id);
        }
      });
    }
  
    deleteProduct(productId:number){
      this.apiService.requestDelete('productDelete', { productId }).subscribe(res => {
        this.fetchPage(0);
      })
    }
}
