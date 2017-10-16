import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import values from 'lodash/fp/values';
import Tone from 'tone';
import { emit, on } from './bus';
import * as actions from './actions';
import * as busChannels from './busChannels';
import { createChannelsManager } from './channelsManager';
// import parts from './parts';
// import playback from './playback';
// import playbackState from './playbackState';
import { getState, setState } from './state';
import { createPartsManager } from './partsManager';
import { createSongManager } from './songManager';
import { createStepSequencesManager } from './stepSequencesManager';
import { createToneAdapter } from './toneAdapter';

export default function Dawww(options) {
  const initialSong = getOr({}, 'song', options);
  const shared = {
    toneAdapter: createToneAdapter(Tone),
    dispatch: emit(busChannels.ACTION_OCCURRED),
    getState,
    setState,
    emit,
    on,
  };
  const modules = {
    channels: createChannelsManager(shared),
    parts: createPartsManager(shared),
    song: createSongManager(shared),
    stepSequences: createStepSequencesManager(shared),
  };
  const updateSong = song => emit(busChannels.ACTION_OCCURRED)(actions.songUpdated({
    prevSong: getOr({}, 'song', getState()),
    song,
  }));

  // Initialize modules
  // playback(shared);
  // playbackState(shared);

  on(busChannels.ACTION_OCCURRED, (action) => {
    const reduceNewState = (acc, cur) => ({
      ...acc,
      [cur]: modules[cur].getNewState(getState()[cur], action),
    });
    const newState = Object.keys(modules).reduce(reduceNewState, {});

    setState(newState);

    // console.log('update', action.type, getState());
    values(modules).forEach(({ performSideEffects }) => {
      performSideEffects(getState(), action, shared.dispatch);
    });
  });

  // Load initial song data
  updateSong(initialSong);

  return {
    onPositionChange: on(busChannels.POSITION_SET),
    onStateChange: on(busChannels.PLAYBACK_STATE_SET),
    pause: emit(busChannels.PLAYBACK_PAUSE_REQUESTED),
    preview: compose(
      emit(busChannels.ACTION_OCCURRED),
      (trackId, pitch) => ({ pitch, trackId, type: busChannels.NOTE_PLAYED }),
    ),
    start: emit(busChannels.PLAYBACK_START_REQUESTED),
    stop: emit(busChannels.PLAYBACK_STOP_REQUESTED),
    updateSong,
  };
}
