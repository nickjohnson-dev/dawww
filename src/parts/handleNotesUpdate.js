import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import { handleNotesDelete } from './handleNotesDelete';
import { handleNotesEdit } from './handleNotesEdit';

export function handleNotesUpdate(update, state, emit) {
  const kind = getOr('', 'diff.kind', update);

  if (kind === 'D') {
    return handleNotesDelete(update, state, emit);
  }

  if (includes(kind, ['A', 'E', 'N'])) {
    return handleNotesEdit(update, state, emit);
  }

  return {};
}
