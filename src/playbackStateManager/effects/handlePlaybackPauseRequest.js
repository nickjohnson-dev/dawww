import * as actions from '../../actions';
import * as constants from '../../constants';

export function handlePlaybackPauseRequest(state, action, shared) {
  shared.toneAdapter.pause();
  shared.dispatch(actions.playbackStateSet(constants.playbackStates.PAUSED));
}
