import getOr from 'lodash/fp/getOr';
import last from 'lodash/fp/last';
import * as actions from '../../actions';
import * as constants from '../../constants';

export function interpretNoteArrayChangedDiff(diff) {
  const id = getOr([], 'path[1]', diff);
  const index = getOr('', 'index', diff);
  const prevValue = getOr('', 'item.lhs', diff);
  const value = getOr('', 'item.rhs', diff);

  switch (last(getOr('', 'item.kind', diff))) {
    case constants.diffKinds.D:
      return actions.notePointDeleted({ id, index, prevValue });
    case constants.diffKinds.N:
      return actions.notePointAdded({ id, index, value });
    default:
      return actions.unknown();
  }
}
