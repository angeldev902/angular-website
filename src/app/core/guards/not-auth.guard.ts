import { CanActivateFn } from '@angular/router';
import { getFromLocalStorage } from '../utils/localStoreHelper';

import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user:any = getFromLocalStorage('userData'); // Get user data

  if(user?.accessToken) { // Redirect to products page
    return router.navigate(['/products']).then(() => false);
  }
  return of(true); // Allow access to page
};
