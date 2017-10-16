import omit from 'lodash/fp/omit';
import * as actions from '../actions';
import { createPart } from '../models/part';

export function reducer(state = {}, action, shared) {
  const playNote = payload => shared.dispatch(actions.notePlayed(payload));

  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      return {
        ...state,
        [action.payload.sequence.id]: createPart({
          notes: shared.getState().notes,
          sequence: action.payload.sequence,
          playNote,
        }, shared),
      };
    case actions.SEQUENCE_DELETED:
      // This corresponding part needs to be disposed before the reference is lost.
      return omit([action.payload.sequence.id], state);
    default:
      return state;
  }
}

// import omit from 'lodash/fp/omit';
//
// export function reducer(parts = {}, action) {
//   switch (action.kind) {
//     case 'A':
//     case 'E':
//     case 'N':
//       return {
//         ...parts,
//         [action.id]: action.part,
//       };
//     case 'D':
//       return omit([action.id], parts);
//     default:
//       return parts;
//   }
// }
