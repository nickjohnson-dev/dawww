import * as actions from '../actions';
import * as helpers from '../helpers';

export function reducer(state = {}, action) {
  switch (action.type) {
    case actions.TRACK_ADDED:
      return {
        ...state,
        [action.payload.track.id]: helpers.getChannel({
          isAnyTrackSoloing: action.payload.isAnyTrackSoloing,
          track: action.payload.track,
        }),
      };
    default:
      return state;
  }
}
