import * as actions from '../../actions';
import * as constants from '../../constants';
import * as helpers from '../../helpers';
import * as selectors from '../../selectors';

export function handlePlaybackStartRequest(getState, action, shared) {
  const loopStartPoint = selectors.getLoopStartPoint(getState());

  shared.toneAdapter.start(undefined, helpers.measuresToTime(loopStartPoint));
  shared.dispatch(actions.playbackStateSet(constants.playbackStates.STARTED));
}
