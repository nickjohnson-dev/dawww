import * as busChannels from './busChannels';
import * as constants from './constants';

export default ({ emit, on }) => {
  on(busChannels.PLAYBACK_PAUSE_REQUESTED, () => {
    emit(busChannels.PLAYBACK_STATE_SET)(constants.playbackStates.PAUSED);
  });

  on(busChannels.PLAYBACK_START_REQUESTED, () => {
    emit(busChannels.PLAYBACK_STATE_SET)(constants.playbackStates.STARTED);
  });

  on(busChannels.PLAYBACK_STOP_REQUESTED, () => {
    emit(busChannels.PLAYBACK_STATE_SET)(constants.playbackStates.STOPPED);
    emit(busChannels.POSITION_SET)(0);
  });
};
