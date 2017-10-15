import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';
import * as actions from '../actions';
import { interpretDiff } from './interpretDiff';

export function createSongManager(shared) {
  return {
    getNewState(state, action) {
      return getOr({}, 'payload.song', action);
    },

    performSideEffects(state, action) {
      if (action.type === actions.SONG_UPDATED) {
        const { prevSong, song } = action.payload;
        console.log(action.payload);
        const differences = deepDiff(prevSong, song) || [];

        differences.forEach((diff) => {
          shared.dispatch(interpretDiff(diff, song));
        });
      }
    },
  };
}
