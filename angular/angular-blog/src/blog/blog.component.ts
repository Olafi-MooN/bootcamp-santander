import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from './title.component';
import { CardMainComponent } from './card-main';
import { CardSecondaryComponent } from './card-secondary';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    CardMainComponent,
    CardSecondaryComponent,
  ],
  selector: 'blog',
  template: `
  <blog-title></blog-title>
  <div class="contents">
  <div class="card-main">
  <card-main></card-main>
  </div>
  <div class="list-secondary">
  <card-secondary></card-secondary>
  <card-secondary></card-secondary>
  <card-secondary></card-secondary>
  </div>
  </div>
  `,
  styles: [
    `.contents { 
      display:flex;
      max-width: 800px;
      margin: 0 auto;
    }

    .card-main { 
      min-width: 300px;
    }

    .list-secondary  {
      width: 100%;
    }
    .list-secondary card-secondary{ 
      width: 100%:
      border-bottom: 1px solid white;
    }`,
  ],
})
export class BlogComponent {
  public title: string = 'BLOG';
}
