import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';  // Importe o HttpClientModule
import { importProvidersFrom } from '@angular/core';  // Helper para fornecer módulos standalone
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Fornece o HttpClientModule no lado cliente
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),  // Fornece o HttpClientModule no cliente
    importProvidersFrom(BrowserAnimationsModule)  // Adicione o BrowserAnimationsModule aqui
  ]
}).catch(err => console.error(err));
