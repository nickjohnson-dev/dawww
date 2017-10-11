import * as busChannels from './busChannels';
import * as constants from './constants';

export default ({ on, setPlaybackState, setPosition }) => {
  on(busChannels.PLAYBACK_PAUSE_REQUESTED, () => {
    setPlaybackState(constants.playbackStates.PAUSED);
  });

  on(busChannels.PLAYBACK_START_REQUESTED, () => {
    setPlaybackState(constants.playbackStates.STARTED);
  });

  on(busChannels.PLAYBACK_STOP_REQUESTED, () => {
    setPlaybackState(constants.playbackStates.STOPPED);
    setPosition(0);
  });
};
