import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as selectors from '../../selectors';

export function handleFocusedSequenceIdEdit(getState, action, shared) {
  const focusedSequenceId = getOr('', 'song.focusedSequenceId', getState());
  const loopStartPoint = selectors.getLoopStartPoint(getState());
  const loopEndPoint = selectors.getLoopEndPoint(getState());

  shared.toneAdapter.setLoopPoints(
    shared.helpers.measuresToTime(loopStartPoint),
    shared.helpers.measuresToTime(loopEndPoint),
  );

  if (focusedSequenceId) {
    shared.dispatch(actions.positionSetRequested(loopStartPoint * 32));
  }
}
