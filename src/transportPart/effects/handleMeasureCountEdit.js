import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import times from 'lodash/fp/times';
import * as actions from '../../actions';
import * as helpers from '../../helpers';
import * as selectors from '../../selectors';

export function handleMeasureCountEdit(getState, action, shared) {
  const loopStartPoint = selectors.getLoopStartPoint(getState());
  const loopEndPoint = selectors.getLoopEndPoint(getState());
  const part = getOr({ at: noop }, 'transportPart', getState());

  times((i) => {
    part.at(i, {
      fn: (payload) => {
        const focusedSequenceId = getOr('', 'song.focusedSequenceId', getState());

        if (focusedSequenceId) return;

        shared.dispatch(actions.positionSet(payload));
      },
      payload: i,
    });
  }, part.length);

  part.start(undefined, helpers.measuresToTime(loopStartPoint));

  part.loop = false;

  shared.toneAdapter.setLoopPoints(
    shared.helpers.measuresToTime(loopStartPoint),
    shared.helpers.measuresToTime(loopEndPoint),
  );
}
