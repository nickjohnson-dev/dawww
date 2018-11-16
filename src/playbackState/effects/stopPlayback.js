import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as actions from '../../actions';
import * as constants from '../../constants';

export function stopPlayback(getState, action, shared) {
  const measuresToTime = getOr(noop, 'helpers.measuresToTime', shared);
  const getLoopStartPoint = getOr(noop, 'selectors.getLoopStartPoint', shared);
  const loopStartPoint = getLoopStartPoint(getState());
  const loopStartTime = measuresToTime(loopStartPoint);

  shared.toneAdapter.stop();
  shared.dispatch(actions.playbackStateSet(constants.PLAYBACK_STATES.STOPPED));
  shared.dispatch(actions.positionSet(loopStartTime));
}
