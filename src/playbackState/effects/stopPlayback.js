import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as actions from '../../actions';
import * as constants from '../../constants';

export function stopPlayback(getState, action, shared) {
  const getLoopStartPoint = getOr(noop, 'selectors.getLoopStartPoint', shared);
  const loopStartPoint = getLoopStartPoint(getState());

  shared.toneAdapter.stop();
  shared.dispatch(actions.playbackStateSet(constants.PLAYBACK_STATES.STOPPED));
  shared.dispatch(actions.positionSet(loopStartPoint));
}
