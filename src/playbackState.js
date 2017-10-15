import * as busChannels from './busChannels';
import * as constants from './constants';

export default ({ emit, on, toneAdapter }) => {
  on(busChannels.PLAYBACK_PAUSE_REQUESTED, () => {
    toneAdapter.pause();
    emit(busChannels.PLAYBACK_STATE_SET)(constants.playbackStates.PAUSED);
  });

  on(busChannels.PLAYBACK_START_REQUESTED, () => {
    toneAdapter.start();
    emit(busChannels.PLAYBACK_STATE_SET)(constants.playbackStates.STARTED);
  });

  on(busChannels.PLAYBACK_STOP_REQUESTED, () => {
    toneAdapter.stop();
    emit(busChannels.PLAYBACK_STATE_SET)(constants.playbackStates.STOPPED);
    emit(busChannels.POSITION_SET)(0);
  });
};
