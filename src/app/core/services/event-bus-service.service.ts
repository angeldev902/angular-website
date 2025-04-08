import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Más moderno, guarda el valor actual y se lo entrega a los nuevos subscriptores automáticamente.

@Injectable({
  providedIn: 'root'
})
export class EventBusServiceService {
  private loggedIn = new BehaviorSubject<boolean>(false); // false por defecto
  public isLoggedIn$ = this.loggedIn.asObservable();

  constructor() { }

  setLoginState(state: boolean) {
    this.loggedIn.next(state);
  }
}
