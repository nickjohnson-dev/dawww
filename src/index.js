import getOr from 'lodash/fp/getOr';
import playback from './playback';
import parts from './parts';
import tracks from './tracks';
import formatSong from './formatSong';

export default (options) => {
  const songData = formatSong(getOr({}, 'song', options));

  playback.loadSongData(songData);

  tracks.loadSongData(songData);

  parts.loadSongData(songData);

  return {
    onStateChange: playback.onStateChange,
    onTimeChange: playback.onTimeChange,
    start: playback.start,
    stop: playback.stop,
  };
};
