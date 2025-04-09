import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private snackBar: MatSnackBar) { }

  message(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  errorMessage(error:any){
    let message:any = '';
    if(error.error.message && typeof error.error.message == 'string'){
      message = error.error.message;
    }else{
      message = 'Ocurrió un error al conectarse con el servicio, intentelo más tarde';
    };
    this.snackBar.open(message, '', {
      duration: 9000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  };
}
