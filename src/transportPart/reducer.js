import * as actions from '../actions';
import { createPart } from '../models/part';

export default function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.MEASURE_COUNT_EDITED:
      return createPart({
        measureCount: action.payload.measureCount,
        shared,
      });
    default:
      return state;
  }
}
