import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'menu',
  template: `
  <nav class="menu-container">
  <ul class="menu-list">
  <li><a [routerLink]="'/'">Inicio </a></li>
  <li><a [routerLink]="'linkedin'">Linkedin </a></li>
  <li><a [routerLink]="'github'">Github </a></li>
  <li><a [routerLink]="'youtube'">Youtube </a></li>
  </ul>
  </nav>
  `,
  styles: [
    `
    .menu-container { 
      width: 100%;
      height: 60px;
      background-color: #000;
      justify-content: center;
      align-items: center;
      display: flex;
      border-bottom: 2px solid white;
    }
    .menu-list { 
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 40px;
    }
    .menu-list li { 
      justify-content: center;
      align-items: center;
      display: flex;
      list-style-type: none;
      color: white;
    }

    .menu-list li a {
      color: white;
      text-decoration: none;
    } 
  `,
  ],
})
export class MenuComponent {}
