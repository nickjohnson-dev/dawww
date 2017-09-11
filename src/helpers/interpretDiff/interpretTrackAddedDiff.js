import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as selectors from '../../selectors';

export function interpretTrackAddedDiff(diff, state) {
  const track = getOr({}, 'rhs', diff);
  const isAnyTrackSoloing = selectors.getIsAnyTrackSoloing(state);

  return actions.trackAdded({ isAnyTrackSoloing, track });
}
