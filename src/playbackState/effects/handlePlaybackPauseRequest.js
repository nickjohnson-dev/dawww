import * as actions from '../../actions';
import * as constants from '../../constants';

export function handlePlaybackPauseRequest(getState, action, shared) {
  shared.toneAdapter.pause();
  shared.dispatch(actions.playbackStateSet(constants.playbackStates.PAUSED));
}
