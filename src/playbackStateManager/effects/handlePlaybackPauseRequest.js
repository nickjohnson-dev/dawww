import * as actions from '../../actions';
import * as constants from '../../constants';

export function handlePlaybackPauseRequest(state, action, dispatch, toneAdapter) {
  toneAdapter.pause();
  dispatch(actions.playbackStateSet(constants.playbackStates.PAUSED));
}
