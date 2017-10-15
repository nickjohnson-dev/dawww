import * as actions from '../actions';
import { reduceNoteAdded } from './reduceNoteAdded';

export function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.NOTE_ADDED:
      return reduceNoteAdded(state, action, shared);
    default:
      return state;
  }
}
