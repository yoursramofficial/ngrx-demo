import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // onIncrement() {
  //   this.counter++;
  // }
  // onDecrement() {
  //   this.counter--;
  // }

  // onReset() {
  //   this.counter = 0;
  // }
}
