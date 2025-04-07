import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { CustomTableComponent } from '../../shared/custom-table/custom-table.component';

@Component({
  selector: 'app-brands-list',
  imports: [CustomTableComponent],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss'
})
export class BrandsListComponent {
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name'  }
  ];
  public brands:any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void{
    this.getBrands();
  }

  getBrands(){
    this.apiService.requestGet('brandsList').subscribe(res => {
      this.brands = res;
    });
  }

  deleteBrand(brand:any){
    console.log('I will delete a brand', brand);
  }
}
