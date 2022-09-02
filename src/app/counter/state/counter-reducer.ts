import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter-action';

import { intialState } from './counter-state';

const _counterReducer = createReducer(
  intialState,
  on(increment, (state) => {
    return {
      ...state,
      counter1: state.counter1 + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter1: state.counter1 - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter1: (state.counter1 = 0),
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
