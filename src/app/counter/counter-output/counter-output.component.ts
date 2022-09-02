import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { updateCounter } from '../state/counter-action';
import { getCounter } from '../state/counter-selectors';
import { CounterState } from '../state/counter-state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter: number = 0;
  value: number;
  // counter$: Observable<CounterState>;
  counterSub: Subscription;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.counterSub = this.store.select(getCounter).subscribe((count) => {
      console.log(count);
      console.log('Counter Sub called');

      this.counter = count;
    });

    // this.counter$ = this.store.select('counter');
  }

  ngOnDestroy() {
    if (this.counterSub) {
      this.counterSub.unsubscribe();
    }
  }

  addToCounter() {
    this.store.dispatch(updateCounter({ value: +this.value }));
  }
}
