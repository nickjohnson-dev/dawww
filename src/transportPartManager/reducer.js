import * as actions from '../actions';
import { createPart } from '../models/part';

export function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.MEASURE_COUNT_CHANGED:
      return createPart({
        measureCount: action.payload.measureCount,
        shared,
      });
    default:
      return state;
  }
}
