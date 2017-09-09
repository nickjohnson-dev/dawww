import getOr from 'lodash/fp/getOr';
import playback from './playback';
import sequences from './sequences';
import formatSong from './formatSong';

export default (options) => {
  const songData = formatSong(getOr({}, 'song', options));

  playback.loadSongData(songData);
  sequences.loadSongData(songData);

  return {
    onStateChange: playback.onStateChange,
    start: playback.start,
    stop: playback.stop,
  };
};
