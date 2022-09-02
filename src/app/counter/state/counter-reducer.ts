import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  updateCounter,
  updateChannelName,
} from './counter-action';

import { intialState } from './counter-state';

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    console.log(state);
    return {
      ...state,
      counter1: state.counter1 + 1,
    };
  }),
  on(decrement, (state) => {
    console.log(state);

    return {
      ...state,
      counter1: state.counter1 - 1,
    };
  }),
  on(reset, (state) => {
    console.log(state);

    return {
      ...state,
      counter1: 0,
    };
  }),
  on(updateCounter, (state, action) => {
    console.log(state);

    return {
      ...state,
      counter1: state.counter1 + action.value,
    };
  }),
  on(updateChannelName, (state) => {
    console.log(state);

    return {
      ...state,
      channelName: 'New channel',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
