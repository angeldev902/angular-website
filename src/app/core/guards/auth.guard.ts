import { CanActivateFn } from '@angular/router';
import { getFromLocalStorage } from '../utils/localStoreHelper';

import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user:any = getFromLocalStorage('userData'); // Get user data

  if(!user || (user && !user.accessToken)) { // Redirect to login page
    return router.navigate(['/auth/login']).then(() => false); // Debes devolver un valor tipo booleano o Observable<boolean>
  }
  return of(true); // Permite el acceso si está logueado // Allow access to page
};
