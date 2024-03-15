import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(APP_ROUTES),
    provideClientHydration(),
    importProvidersFrom(TuiRootModule,TuiDialogModule,),
  ],
};
