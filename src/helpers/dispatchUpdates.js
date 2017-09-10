import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';

export const dispatchUpdates = ({ dispatch, prevSong, song }) => {
  const differences = deepDiff(prevSong, song) || [];

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
