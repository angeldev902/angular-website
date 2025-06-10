import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Category } from '../../../core/models/category.model';
import { CustomLinkButtonComponent } from '../../../shared/custom-link-button/custom-link-button.component';

@Component({
  selector: 'app-categories-list',
   imports: [CustomTableComponent, CustomLinkButtonComponent, MatDialogModule],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
  standalone: true
})
export class CategoriesListComponent {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name'  },
    { key: 'code', label: 'Code'  }
  ];
  public categories:Category[] = [];

  constructor(private apiService: ApiService, private matDialog: MatDialog){}

  ngOnInit(): void{
    this.getCategories();
  }

  getCategories(){
      this.apiService.requestGet('categoriesList').subscribe(res => {
        this.categories = res;
      });
  }

  openDeleteDialog(category:any) {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: { title: 'Delete Category', message: `Do you want delete ${category.name} ?` },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteCategory(category.id);
      }
    });
  }

  deleteCategory(categoryId:number){
    this.apiService.requestDelete('categoryDelete', { categoryId }).subscribe(res => {
      this.getCategories();
    })
  }

}
