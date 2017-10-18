import * as actions from '../../actions';
import * as constants from '../../constants';

export function handlePlaybackStartRequest(getState, action, shared) {
  shared.toneAdapter.start();
  shared.dispatch(actions.playbackStateSet(constants.playbackStates.STARTED));
}
