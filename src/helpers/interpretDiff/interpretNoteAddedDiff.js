import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as actions from '../../actions';

export function interpretNoteAddedDiff(diff) {
  const newNote = getOr({}, 'rhs', diff);

  if (isEmpty(newNote)) return actions.unknown();

  return actions.noteAdded(newNote);
}
