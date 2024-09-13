import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { HttpClientModule } from '@angular/common/http';  // Importe o HttpClientModule
import { importProvidersFrom } from '@angular/core';  // Helper para fornecer módulos standalone
import { appConfig } from './app.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(HttpClientModule),  // Fornece o HttpClientModule no lado do servidor
    importProvidersFrom(BrowserAnimationsModule)  // Adicione o BrowserAnimationsModule para SSR também
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
