import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateChannelName } from '../state/counter-action';
import { getChannelName } from '../state/counter-selectors';
import { CounterState } from '../state/counter-state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  customChannelName: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit() {
    this.store.select(getChannelName).subscribe((channelName) => {
      console.log('Channel Sub called');
      this.customChannelName = channelName;
    });
  }
  changeName() {
    this.store.dispatch(updateChannelName());
  }
}
