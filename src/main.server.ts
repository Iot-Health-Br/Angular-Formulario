import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';  // Certifique-se de usar a configuração atualizada

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
