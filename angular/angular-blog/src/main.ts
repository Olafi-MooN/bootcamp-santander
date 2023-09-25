import 'zone.js/dist/zone';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './routes';
import { App } from './app';

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
