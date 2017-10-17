import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import times from 'lodash/fp/times';
import * as actions from '../../actions';
import { measuresToTime } from '../../helpers';

export function handleMeasureCountChange(state, action, dispatch, toneAdapter) {
  const measureCount = getOr(0, 'payload.measureCount', action);
  const part = getOr({ at: noop }, 'transportPart', state);

  times((i) => {
    part.at(i, {
      fn: payload => dispatch(actions.positionSet(payload)),
      payload: i,
    });
  }, part.length);

  toneAdapter.setLoopPoints(0, measuresToTime(measureCount));
}
