import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';

export function interpretTrackAddedDiff(diff) {
  const track = getOr({}, 'rhs', diff);

  return actions.trackAdded(track);
}
