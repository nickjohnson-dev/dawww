import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';
import { interpretDiff } from './interpretDiff';

export const dispatchUpdates = ({ dispatch, prevSong, song }) => {
  const differences = deepDiff(prevSong, song) || [];
  console.log(differences[0]);
  console.log(interpretDiff(differences[0]));

  differences.forEach((diff) => {
    const dataType = getOr('', 'path[0]', diff);

    dispatch({
      dataType,
      diff,
      prevSong,
      song,
    });
  });
};
