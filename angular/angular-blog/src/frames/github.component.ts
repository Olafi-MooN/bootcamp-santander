import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'github',
  template: `
    <iframe src="https://olafi-moon.github.io/Olafi-Moon/" class="iframe"></iframe>
  `,
  styles: [
    `
      .iframe { 
        width: 100%;
        height: calc(100vh - 70px);
        border: none;
      }
    `,
  ],
})
export class GithubComponent {}
