import * as selectors from '../../selectors';

export function handleFocusedSequenceIdEdit(getState, action, shared) {
  const loopStartPoint = selectors.getLoopStartPoint(getState());
  const loopEndPoint = selectors.getLoopEndPoint(getState());

  shared.toneAdapter.setLoopPoints(
    shared.helpers.measuresToTime(loopStartPoint),
    shared.helpers.measuresToTime(loopEndPoint),
  );
}
