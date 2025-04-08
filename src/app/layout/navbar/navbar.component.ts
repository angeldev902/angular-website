import { Component, Inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../core/shared-imports';
import { getFromLocalStorage, removeFromLocalStorage } from '../../core/utils/localStoreHelper';
import { Router } from '@angular/router'; // Importa el Router
@Component({
  selector: 'app-navbar',
  imports: SHARED_IMPORTS,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {
  public user:any = getFromLocalStorage('userData');

  constructor(private router: Router) {} // Inyecta el servicio Router

  logout(){
    removeFromLocalStorage('userData');
    this.user = null;
    this.router.navigate(['/auth/login']);
  }

}
