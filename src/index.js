import getOr from 'lodash/fp/getOr';
import values from 'lodash/fp/values';
import Tone from 'tone';
import { emit, on } from './bus';
import * as actions from './actions';
import * as busChannels from './busChannels';
import { createChannelsManager } from './channelsManager';
import { getState, setState } from './state';
import { createPartsManager } from './partsManager';
import { createPlaybackStateManager } from './playbackStateManager';
import { createSongManager } from './songManager';
import { createTransportPartManager } from './transportPartManager';
import { createToneAdapter } from './toneAdapter';

export default function Dawww(options) {
  const dispatch = emit(busChannels.ACTION_OCCURRED);
  const toneAdapter = createToneAdapter(Tone);
  const shared = {
    dispatch,
    getState,
    setState,
    emit,
    on,
    toneAdapter,
  };
  const modules = {
    channels: createChannelsManager(shared),
    parts: createPartsManager(shared),
    playbackState: createPlaybackStateManager(shared),
    song: createSongManager(shared),
    transportPart: createTransportPartManager(shared),
  };
  const updateSong = song => dispatch(actions.songUpdated({
    prevSong: getOr({}, 'song', getState()),
    song,
  }));

  on(busChannels.ACTION_OCCURRED, (action) => {
    const reduceNewState = (acc, cur) => ({
      ...acc,
      [cur]: modules[cur].getNewState(getState()[cur], action),
    });
    const newState = Object.keys(modules).reduce(reduceNewState, {});

    setState(newState);

    // console.log('ACTION_OCCURRED', action, getState());
    values(modules).forEach(({ performSideEffects }) => {
      performSideEffects(getState(), action, dispatch, toneAdapter);
    });

    if (action.type === actions.POSITION_SET) {
      emit(busChannels.POSITION_SET)(action.payload.position);
    }

    if (action.type === actions.PLAYBACK_STATE_SET) {
      emit(busChannels.PLAYBACK_STATE_SET)(action.payload.playbackState);
    }
  });

  // Load initial song data
  updateSong(getOr({}, 'song', options));

  return {
    onPositionChange: fn => on(busChannels.POSITION_SET, fn),
    onStateChange: fn => on(busChannels.PLAYBACK_STATE_SET, fn),
    pause: () => dispatch(actions.playbackPauseRequested()),
    preview: (trackId, pitch) => dispatch(actions.notePlayed({
      pitch,
      trackId,
    })),
    start: () => dispatch(actions.playbackStartRequested()),
    stop: () => dispatch(actions.playbackStopRequested()),
    updateSong,
  };
}
