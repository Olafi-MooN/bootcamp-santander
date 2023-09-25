import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'linkedin',
  template: `
    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6905641804956606464" class="iframe"></iframe>
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
export class LinkedinComponent {}
