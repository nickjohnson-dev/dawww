import omit from 'lodash/fp/omit';
import * as actions from '../actions';

export default function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.TRACK_ADDED:
      return {
        ...state,
        [action.payload.track.id]: shared.toneAdapter.createInstrument({
          track: action.payload.track,
        }),
      };
    case actions.TRACK_DELETION_ACCEPTED:
      return omit([action.payload.track.id], state);
    default:
      return state;
  }
}
