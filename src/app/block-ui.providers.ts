import { importProvidersFrom } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';

export const blockUiProviders = [
  importProvidersFrom(BlockUIModule.forRoot())
];

// Debido a que la libreia no se ha actualizado del todos se tuve que crear un archivo que actúe como tu módulo raíz 
