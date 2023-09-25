import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'youtube',
  template: `
    <iframe src="https://www.youtube.com/embed/rVMray0KiHU?si=PGiztqqVC8dPkUn9" class="iframe"></iframe>
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
export class YoutubeComponent {}
