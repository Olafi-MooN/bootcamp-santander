import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'card-secondary',
  template: `
  <article class="card">
  <figure>
    <img src={{imgUrl}} alt="Descrição da Imagem">
  </figure>
  <section>
    <header>
      <h2>{{title}}</h2>
    </header>
  </section>
</article>
  `,
  styles: [
    `
    .card {
      display: flex;
      flex-direction: row;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin: 0;
      gap: 20px
    }
    
    .card header {
      font-size: 1.2rem;
      font-weight: bold;
    }
  
    .card figure { 
      width: 150px;
    }
    .card img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
    
    .card section {
      font-size: 10px;
      display:flex;
      justify-content: center;
      align-items:center;
      font-weight: lighter;
    }
  `,
  ],
})
export class CardSecondaryComponent {
  public title: string = 'BLOG';
  public imgUrl: string =
    'https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
}
