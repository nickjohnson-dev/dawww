import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';

export function handleFocusedSequenceIdEdit(getState, action, shared) {
  const focusedSequenceId = getOr('', 'song.focusedSequenceId', getState());
  const loopStartPoint = shared.selectors.getLoopStartPoint(getState());
  const loopEndPoint = shared.selectors.getLoopEndPoint(getState());

  shared.toneAdapter.setLoopPoints(
    shared.helpers.measuresToTime(loopStartPoint),
    shared.helpers.measuresToTime(loopEndPoint),
  );

  if (focusedSequenceId) {
    shared.dispatch(actions.positionSetRequested(0));
  }
}
