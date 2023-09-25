import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() public name: string = 'Alef';

  constructor() { 
    console.log('primary method called is the constructor');
  }
  ngOnInit(): void {
    console.log('primary life-cycle initial');
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges');
  }
  ngDoCheck(): void {
   console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy');
  }

}
