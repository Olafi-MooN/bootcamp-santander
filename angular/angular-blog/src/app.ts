import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './blog/menu.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MenuComponent],
  template: `
    <menu></menu>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}
