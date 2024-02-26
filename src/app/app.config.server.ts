import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { UNIVERSAL_PROVIDERS } from "@ng-web-apis/universal";
import { provideClientHydration } from '@angular/platform-browser';


const serverConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideServerRendering(),
    UNIVERSAL_PROVIDERS
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
