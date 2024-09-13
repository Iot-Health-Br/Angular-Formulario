import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';  // Importe o withFetch
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),  // Adiciona o withFetch() no lado servidor
    importProvidersFrom(BrowserAnimationsModule)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
