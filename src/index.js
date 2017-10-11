import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import { emit, on } from './bus';
import * as busChannels from './busChannels';
import channels from './channels';
import dispatcher from './dispatcher';
import playback from './playback';
import parts from './parts';
import { getState, setState } from './state';
import playbackState from './playbackState';
import toneAdapter from './toneAdapter';

export default function Dawww(options) {
  const initialSong = getOr({}, 'song', options);
  const shared = {
    getState,
    setState,
    emit,
    on,
  };

  // Initialize modules
  channels(shared);
  dispatcher(shared);
  parts(shared);
  playback(shared);
  playbackState(shared);
  toneAdapter(shared);

  // Load initial song data
  emit(busChannels.UPDATE_REQUESTED)(initialSong);

  return {
    onPositionChange: on(busChannels.POSITION_SET),
    onStateChange: on(busChannels.PLAYBACK_STATE_SET),
    pause: emit(busChannels.PLAYBACK_PAUSE_REQUESTED),
    preview: compose(
      emit(busChannels.NOTE_PLAYED),
      (trackId, pitch) => ({ pitch, trackId }),
    ),
    start: emit(busChannels.PLAYBACK_START_REQUESTED),
    stop: emit(busChannels.PLAYBACK_STOP_REQUESTED),
    updateSong: emit(busChannels.UPDATE_REQUESTED),
  };
}
