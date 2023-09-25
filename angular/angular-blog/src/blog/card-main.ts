import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'card-main',
  template: `
  <article class="card">
  <header>
    <h2>{{title}}</h2>
  </header>
  <figure>
    <img src={{imgUrl}} alt="Descrição da Imagem">
    <figcaption>Legenda da Imagem</figcaption>
  </figure>
  <section>
    <p>{{content}}</p>
  </section>
  <footer>
    <p>Autor: {{name}}</p>
    <p>Data de Publicação: {{date}}</p>
  </footer>
</article>
  `,
  styles: [
    `
    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      padding: 10px;
    margin: 0;
    }
    
    .card header {
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .card figure {
      margin: 10px 0;
      text-align: center;
    }
    
    .card img {
      max-width: 100%;
      height: auto;
    }
    
    .card section {
      font-size: 1rem;
      line-height: 1.4;
    }
    
    .card footer {
      margin-top: 10px;
      font-size: 0.9rem;
      color: #777;
    }
  `,
  ],
})
export class CardMainComponent {
  public title: string = 'BLOG';
  public imgUrl: string =
    'https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
  public content: string = 'Uso gratuito sob a Licença da Unsplash';
  public name: string = 'A S S';
  public date: string = '24/09/2023';
}
