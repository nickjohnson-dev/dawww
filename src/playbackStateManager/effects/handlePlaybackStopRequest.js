import * as actions from '../../actions';
import * as constants from '../../constants';

export function handlePlaybackStopRequest(state, action, dispatch, toneAdapter) {
  toneAdapter.stop();
  dispatch(actions.playbackStateSet(constants.playbackStates.STOPPED));
  dispatch(actions.positionSet(0));
}
