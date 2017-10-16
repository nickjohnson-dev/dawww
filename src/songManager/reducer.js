import * as actions from '../actions';

export function reducer(state = {}, action) {
  switch (action.type) {
    case actions.SONG_UPDATED:
      return action.payload.song;
    default:
      return state;
  }
}
