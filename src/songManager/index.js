import deepDiff from 'deep-diff';
import * as actions from '../actions';
import { interpretDiff } from './interpretDiff';
import { reducer } from './reducer';

export function createSongManager() {
  return {
    getNewState(state, action, dispatch) {
      return reducer(state, action, dispatch);
    },

    performSideEffects(state, action, dispatch) {
      if (action.type === actions.SONG_UPDATED) {
        const { prevSong, song } = action.payload;
        const differences = deepDiff(prevSong, song) || [];

        // console.log('-----');
        // console.log(differences[differences.length - 1]);
        // console.log(interpretDiff(differences[differences.length - 1], song));
        // console.log('-----');

        differences.forEach((diff) => {
          dispatch(interpretDiff(diff, song));
        });
      }
    },
  };
}
