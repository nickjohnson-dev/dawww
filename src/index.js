import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import getChannels from './channels';
import dispatchUpdates from './dispatchUpdates';
import getPlayback from './playback';
import getParts from './parts';
import formatSong from './formatSong';

export default (options) => {
  const state = {
    channels: {},
    parts: {},
    song: {},
    transportPart: {},
  };

  const channels = getChannels({ state });
  const parts = getParts({ channels, state });
  const playback = getPlayback({ state });

  loadSong(getOr({}, 'song', options));

  return {
    onStateChange: playback.onStateChange,
    onTimeChange: playback.onTimeChange,
    preview: channels.preview,
    start: playback.start,
    stop: playback.stop,
    updateSong,
  };

  function loadSong(song) {
    if (isEmpty(song)) return;

    state.song = formatSong(song);

    playback.loadSongData(state.song);
    channels.loadSongData(state.song);
    parts.loadSongData(state.song);
  }

  function updateSong(newSong) {
    const song = formatSong(newSong);
    dispatchUpdates({
      modules: { channels, parts, playback },
      prevSong: state.song,
      song,
    });
    state.song = song;
  }
};
