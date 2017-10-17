import omit from 'lodash/fp/omit';
import * as actions from '../actions';

export default function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.TRACK_ADDED:
      return {
        ...state,
        [action.payload.track.id]: shared.models.instrument.create({
          track: action.payload.track,
          shared,
        }),
      };
    case actions.TRACK_DELETED:
      return omit([action.payload.track.id], state);
    default:
      return state;
  }
}
