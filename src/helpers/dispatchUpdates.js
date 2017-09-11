import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';
import { interpretDiff } from './interpretDiff';

export const dispatchUpdates = ({ dispatch, emit, prevSong, song, state }) => {
  const differences = deepDiff(prevSong, song) || [];
  // console.log('-----');
  // console.log(differences[0]);
  // console.log(interpretDiff(differences[0], state, emit));
  // console.log('-----');

  differences.forEach((diff) => {
    const dataType = getOr('', 'path[0]', diff);
    const action = interpretDiff(diff, state, emit);

    dispatch({
      action,
      dataType,
      diff,
      prevSong,
      song,
    });
  });
};
