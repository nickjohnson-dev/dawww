import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';

export default ({ modules, prevSong, song }) => {
  const differences = deepDiff(prevSong, song) || [];

  differences.forEach((difference) => {
    const dataType = getOr('', 'path[0]', difference);

    if (dataType === 'sequences') {
      modules.parts.handleUpdate({
        difference,
        prevSong,
        song,
      });
    }

    if (dataType === 'tracks') {
      modules.channels.handleUpdate({
        difference,
        prevSong,
        song,
      });
    }

    if (includes(dataType, ['bpm', 'measureCount'])) {
      modules.playback.handleUpdate({
        difference,
        prevSong,
        song,
      });
    }
  });
};
