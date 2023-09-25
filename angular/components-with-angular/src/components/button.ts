import { CommonModule } from '@angular/common';
import { Component, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <button>{{text}}</button>
    </div>
  `,
  styles: [
    `
    button { 
      background-color: red;
      color: white;
    }
  `,
  ],
})
export class ButtonComponent {
  @Input() text: string = 'Text';

  get alertOla() {
    return alert('olá');
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
