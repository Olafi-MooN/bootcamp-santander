import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>Hello component</h1>',
})
export class HelloComponent {}

@NgModule({
  declarations: [HelloComponent],
  imports: [CommonModule],
  exports: [HelloComponent],
})
export class HelloModule {}
