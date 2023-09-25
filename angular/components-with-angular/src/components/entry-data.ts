import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'entry-data',
  template: `
  <div>
    <input [value]="value" (input)="value = $any($event.target).value"/>
    {{value}}
  </div>
  <div>
    <input [(ngModel)]="valuePass"/>
    {{valuePass}}
  </div>
  `,
})
export class EntryComponent {
  public value = 'Two way data binding';
  public valuePass = 'Two way data binding ngModel';
}

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, FormsModule],
  exports: [EntryComponent],
})
export class EntryModule {}
