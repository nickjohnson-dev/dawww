import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import times from 'lodash/fp/times';
import * as actions from '../../actions';
import { measuresToTime } from '../../helpers';

export function handleMeasureCountEdit(getState, action, shared) {
  const measureCount = getOr(0, 'payload.measureCount', action);
  const part = getOr({ at: noop }, 'transportPart', getState());

  times((i) => {
    part.at(i, {
      fn: payload => shared.dispatch(actions.positionSet(payload)),
      payload: i,
    });
  }, part.length);

  shared.toneAdapter.setLoopPoints(0, measuresToTime(measureCount));
}
