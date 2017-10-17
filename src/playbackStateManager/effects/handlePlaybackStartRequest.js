import * as actions from '../../actions';
import * as constants from '../../constants';

export function handlePlaybackStartRequest(state, action, dispatch, toneAdapter) {
  toneAdapter.start();
  dispatch(actions.playbackStateSet(constants.playbackStates.STARTED));
}
