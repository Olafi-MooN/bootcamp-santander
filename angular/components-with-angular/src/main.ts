import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloModule } from './hello/hello';
import { MenuModule } from './components/menu';
import { ButtonModule } from './components/button';
import { EntryModule } from './components/entry-data';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [HelloModule, MenuModule, ButtonModule, EntryModule],
  template: `
    <hello></hello> 
    <menu></menu>
    <app-button [text]="'Button'"></app-button>
    <entry-data></entry-data>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
