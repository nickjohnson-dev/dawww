import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';
import channels from './channels';
import parts from './parts';

export default (song, prevSong) => {
  const differences = deepDiff(prevSong, song) || [];

  differences.forEach((difference) => {
    const dataType = getOr('', 'path[0]', difference);

    if (dataType === 'sequences') {
      parts.handleUpdate({
        difference,
        prevSong,
        song,
      });
    }

    if (dataType === 'tracks') {
      channels.handleUpdate({
        difference,
        prevSong,
        song,
      });
    }
  });
};
