import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { CustomTableComponent } from '../../../shared/custom-table/custom-table.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Brand } from '../../../core/models/brand.model';
import { CustomLinkButtonComponent } from '../../../shared/custom-link-button/custom-link-button.component';
@Component({
  selector: 'app-brands-list',
  imports: [CustomTableComponent, CustomLinkButtonComponent, MatDialogModule],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  standalone: true
})
export class BrandsListComponent {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name'  }
  ];
  public brands:Brand[] = [];

  constructor(private apiService: ApiService, private matDialog: MatDialog){}

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(){
    this.apiService.requestGet('brandsList').subscribe(res => {
      this.brands = res;
    });
  }

  openDeleteDialog(brand:any) {
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: { title: 'Delete Brand', message: `Do you want delete ${brand.name} ?` },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteBrand(brand.id);
      }
    });
  }

  deleteBrand(brandId:number){
    this.apiService.requestDelete('brandDelete', { brandId }).subscribe(res => {
      this.getBrands();
    })
  }
}
