// core/interceptors/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { getFromLocalStorage } from '../utils/localStoreHelper';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userData:any = getFromLocalStorage('userData');
  const token = userData ? userData.accessToken : '';

  const excludedUrls = ['/auth/login', '/auth/register'];
  const shouldSkip = excludedUrls.some(url => req.url.includes(url));

  if (token && !shouldSkip) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
