import { Component, Inject } from '@angular/core';
import { SHARED_IMPORTS } from '../../core/shared-imports';
import { getFromLocalStorage, removeFromLocalStorage } from '../../core/utils/localStoreHelper';
import { Router } from '@angular/router'; // Importa el Router
import { EventBusServiceService } from '../../core/services/event-bus-service.service';
@Component({
  selector: 'app-navbar',
  imports: SHARED_IMPORTS,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {
  public user:any = getFromLocalStorage('userData');

  constructor(private router: Router, private eventBusServiceService: EventBusServiceService) {} // Inyecta el servicio Router

  ngOnInit() {
    console.log('User', this.user);
    this.eventBusServiceService.isLoggedIn$.subscribe(isLogged => {
      if (isLogged) {
        this.user = getFromLocalStorage('userData');
        console.log('User', this.user);
      }
    });
  }

  logout(){
    removeFromLocalStorage('userData');
    this.user = null;
    this.eventBusServiceService.setLoginState(false); // Update login status
    this.router.navigate(['/auth/login']);
  }

}
