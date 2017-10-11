import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import eventEmitter from 'event-emitter';
import Tone from 'tone';
import channels from './channels';
import * as helpers from './helpers';
import playback from './playback';
import parts from './parts';

export default function Dawww(options) {
  const bus = eventEmitter();
  let state = {
    channels: {},
    parts: {},
    playbackStateSubscribers: [],
    positionSubscribers: [],
    song: {
      notes: {},
      sequences: {},
      tracks: {},
    },
    transportPart: {},
  };
  const shared = {
    emit: (...args) => bus.emit(...args),
    getState: () => ({ ...state }),
    on: (...args) => bus.on(...args),
    setState: (updates) => {
      state = { ...state, ...updates };
    },
  };

  const pause = () => {
    Tone.Transport.pause();
    shared.emit('pause');
  };

  const playbackStateNotifier = helpers.getPlaybackStateNotifier(shared);

  const positionNotifier = helpers.getPositionNotifier(shared);

  const preview = (trackId, pitch) => {
    shared.emit('play', {
      trackId,
      pitch,
    });
  };

  const start = () => {
    Tone.Transport.start();
    shared.emit('start');
  };

  const stop = () => {
    Tone.Transport.stop();
    shared.emit('stop');
  };

  const updateSong = (song) => {
    if (isEmpty(song)) return;

    const prevSong = shared.getState().song;

    shared.setState({ song });

    helpers.dispatchUpdates({
      dispatch: value => shared.emit('update', value),
      emit: (...args) => shared.emit(...args),
      state: shared.getState(),
      prevSong,
      song,
    });
  };

  channels(shared);

  parts(shared);

  playback(shared);

  updateSong(getOr({}, 'song', options));

  return {
    onPositionChange: positionNotifier.subscribe,
    onStateChange: playbackStateNotifier.subscribe,
    pause,
    preview,
    start,
    stop,
    updateSong,
  };
}
