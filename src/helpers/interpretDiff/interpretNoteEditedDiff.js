import getOr from 'lodash/fp/getOr';
// import isEmpty from 'lodash/fp/isEmpty';
import last from 'lodash/fp/last';
import * as actions from '../../actions';

export function interpretNoteEditedDiff(diff) {
  const id = last(getOr([], 'path[1]', diff));
  const prevValue = getOr('', 'lhs', diff);
  const value = getOr('', 'rhs', diff);

  switch (last(getOr([], 'path', diff))) {
    case 'sequenceId':
      return actions.noteSequenceIdEdited({ id, prevValue, value });
    case 'x':
      return actions.notePointXEdited({ id, prevValue, value });
    case 'y':
      return actions.notePointYEdited({ id, prevValue, value });
    default:
      return actions.unknown();
  }
}
