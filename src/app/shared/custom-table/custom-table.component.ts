import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SHARED_IMPORTS } from '../../core/shared-imports';

@Component({
  selector: 'app-custom-table',
  imports: SHARED_IMPORTS,
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
  standalone: true
})
export class CustomTableComponent {
  @Input() columns: { key: string, label: string, type?: 'text' | 'currency' | 'date' | 'object' }[] = [];
  @Input() data: any[] = [];

  @Input() showPagination = false;
  @Input() pageSize = 5;
  @Input() totalItems = 0;

  @Output() delete = new EventEmitter<any>();
  @Output() pageChange = new EventEmitter<number>(); // Emit page index

  currentPage = 0;

  onDelete(item: any) { // Delete element
    this.delete.emit(item);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.totalItems) {
      this.currentPage++;
        this.changePage();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.changePage();
    }
  }

  changePage(){
    if (this.pageChange.observed) {
      this.pageChange.emit(this.currentPage);
    }
  }
}
