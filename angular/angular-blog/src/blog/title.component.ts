import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'blog-title',
  template: `
  <header class="title-container">
    <h1 class="title-main">{{title}}</h1>
  </header>
  `,
  styles: [
    `
   .title-container { 
    display:flex;
    width: 100%;
    border-bottom: 2px solid white;
   }

   .title-main { 
     width: 100%;
     text-align:center;
    font-size: 5rem;
    font-weight: bold;
   }

   
  `,
  ],
})
export class TitleComponent {
  public title: string = 'BLOG';
}
