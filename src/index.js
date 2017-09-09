import getOr from 'lodash/fp/getOr';
import playback from './playback';
import sequences from './sequences';
import format from './format';

export default (options) => {
  const songData = format(getOr({}, 'song', options));

  console.log('Song Data', songData);

  playback.loadSongData(songData);

  sequences.loadSongData(songData);

  return {
    onStateChange: playback.onStateChange,
    onTimeChange: playback.onTimeChange,
    start: playback.start,
    stop: playback.stop,
  };
};
