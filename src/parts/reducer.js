import omit from 'lodash/fp/omit';
import * as actions from '../actions';
import { createPart } from '../models/part';

export default function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      return {
        ...state,
        [action.payload.sequence.id]: createPart({
          measureCount: action.payload.sequence.measureCount,
          position: action.payload.sequence.position,
          shared,
        }),
      };
    case actions.SEQUENCE_DELETION_ACCEPTED:
      // This corresponding part needs to be disposed before the reference is lost.
      return omit([action.payload.sequence.id], state);
    default:
      return state;
  }
}
