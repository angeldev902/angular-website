import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'; // Para que funcione el componente como modal
import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS } from '../../../core/shared-imports';
import { CustomButtonComponent } from '../../../shared/custom-button/custom-button.component';

@Component({
  selector: 'app-confirm-dialog',
  imports: [CustomButtonComponent, ...SHARED_IMPORTS],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  standalone: true
})
export class ConfirmDialogComponent {
  title:string = '';
  message:string = '';

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }
  ){
    this.title = this.data.title;
    this.message = this.data.message;
    console.log('Datos', this.data);
  }

  close(){
    this.dialogRef.close();
  }

  confirm(){
    this.dialogRef.close(true);
  }
}
