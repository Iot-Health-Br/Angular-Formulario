import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';  // Importe o withFetch
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),  // Adiciona o withFetch() para habilitar a API Fetch
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));
