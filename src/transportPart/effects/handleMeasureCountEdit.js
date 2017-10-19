import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as actions from '../../actions';

export function handleMeasureCountEdit(getState, action, shared) {
  const measuresToTime = getOr(noop, 'helpers.measuresToTime', shared);
  const disableLoop = getOr(noop, 'models.part.disableLoop', shared);
  const getEvents = getOr(() => [], 'models.part.getEvents', shared);
  const setEvents = getOr(noop, 'models.part.setEvents', shared);
  const startAtOffset = getOr(noop, 'models.part.startAtOffset', shared);
  const getLoopEndPoint = getOr(noop, 'selectors.getLoopEndPoint', shared);
  const getLoopStartPoint = getOr(noop, 'selectors.getLoopStartPoint', shared);
  const setLoopPoints = getOr(noop, 'toneAdapter.setLoopPoints', shared);
  const loopEndPoint = getLoopEndPoint(getState());
  const loopEndTime = measuresToTime(loopEndPoint);
  const loopStartPoint = getLoopStartPoint(getState());
  const loopStartTime = measuresToTime(loopStartPoint);
  const transportPart = getOr({}, 'transportPart', getState());

  setEvents(getEvents(transportPart).map((event, index) => ({
    fn: (payload) => {
      const focusedSequenceId = getOr('', 'song.focusedSequenceId', getState());

      if (focusedSequenceId) return;

      shared.dispatch(actions.positionSet(payload));
    },
    payload: index,
  })), transportPart);

  startAtOffset(loopStartTime, transportPart);

  disableLoop(transportPart);

  setLoopPoints(loopStartTime, loopEndTime);
}
