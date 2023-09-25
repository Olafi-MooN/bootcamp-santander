import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'menu',
  template: `<h1>My component Menu</h1>`,
})
export class MenuComponent {}

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule],
  exports: [MenuComponent],
})
export class MenuModule {}
