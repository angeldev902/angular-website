import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { BlockUIService } from 'ng-block-ui';
import { finalize } from 'rxjs/operators';

export const blockUiInterceptor: HttpInterceptorFn = (req, next) => {
  const blockUIService = inject(BlockUIService);

  blockUIService.start('global'); // El parametro que recive es el identificador del loader el cual se define en el componente principal
  return next(req).pipe(
    finalize(() => blockUIService.stop('global')) // El mismo caso para cuando se detiene el loader
  );

};
