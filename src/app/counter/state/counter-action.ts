import { createAction, props } from '@ngrx/store';
import { CounterState } from './counter-state';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const updateCounter = createAction(
  'updateCounter',
  props<{ value: number }>()
);

export const updateChannelName = createAction('updateChannelName');
