import getOr from 'lodash/fp/getOr';
import channels from './channels';
import playback from './playback';
import parts from './parts';
import formatSong from './formatSong';

export default (options) => {
  const songData = formatSong(getOr({}, 'song', options));

  playback.loadSongData(songData);

  channels.loadSongData(songData);

  parts.loadSongData(songData);

  return {
    onStateChange: playback.onStateChange,
    onTimeChange: playback.onTimeChange,
    start: playback.start,
    stop: playback.stop,
  };
};
