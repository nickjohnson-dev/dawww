import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import eventEmitter from 'event-emitter';
import Tone from 'tone';
import channels from './channels';
import * as helpers from './helpers';
import playback from './playback';
import parts from './parts';

export default function Dawww(options) {
  let state = {
    channels: {},
    parts: {},
    song: {
      notes: {},
      sequences: {},
      tracks: {},
    },
    transportPart: {},
  };

  const shared = {
    bus: eventEmitter(),
    getState: () => state,
    setState: (updates) => {
      state = { ...state, ...updates };
    },
  };

  const pause = () => Tone.Transport.pause();

  const preview = (trackId, pitch) => {
    shared.bus.emit('play', {
      trackId,
      pitch,
    });
  };

  const start = () => Tone.Transport.start();

  const stop = () => Tone.Transport.stop();

  const updateSong = (song) => {
    if (isEmpty(song)) return;

    helpers.dispatchUpdates({
      dispatch: value => shared.bus.emit('update', value),
      prevSong: shared.getState().song,
      song,
    });

    shared.setState({ song });
  };

  channels(shared);

  parts(shared);

  playback(shared);

  updateSong(getOr({}, 'song', options));

  return {
    onPositionChange: helpers.onPositionChange,
    onStateChange: helpers.onStateChange,
    onTimeChange: helpers.onTimeChange,
    pause,
    preview,
    start,
    stop,
    updateSong,
  };
}
