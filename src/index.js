import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import Tone from 'tone';
import { emit, on } from './bus';
import channels from './channels';
import * as helpers from './helpers';
import playback from './playback';
import parts from './parts';
import { getState, setState } from './state';
import toneAdapter from './toneAdapter';

export default function Dawww(options) {
  const shared = {
    setBPM: emit('bpmSet'),
    getState,
    setState,
    emit,
    on,
    Tone,
  };

  const playbackStateNotifier = helpers.getPlaybackStateNotifier(shared);

  const positionNotifier = helpers.getPositionNotifier(shared);

  const preview = (trackId, pitch) => {
    emit('play')({
      trackId,
      pitch,
    });
  };

  const updateSong = (song) => {
    if (isEmpty(song)) return;

    const prevSong = getState().song;

    setState({ song });

    helpers.dispatchUpdates({
      dispatch: emit('update'),
      emit,
      state: getState(),
      prevSong,
      song,
    });
  };

  toneAdapter(shared);

  channels(shared);

  parts(shared);

  playback(shared);

  updateSong(getOr({}, 'song', options));

  return {
    onPositionChange: positionNotifier.subscribe,
    onStateChange: playbackStateNotifier.subscribe,
    pause: emit('pause'),
    start: emit('start'),
    stop: emit('stop'),
    preview,
    updateSong,
  };
}
