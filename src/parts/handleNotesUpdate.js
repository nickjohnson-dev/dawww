import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import { handleNotesDelete } from './handleNotesDelete';
import { handleNotesEdit } from './handleNotesEdit';

export function handleNotesUpdate(shared, update) {
  const kind = getOr('', 'diff.kind', update);

  if (kind === 'D') {
    return handleNotesDelete(shared, update);
  }

  if (includes(kind, ['A', 'E', 'N'])) {
    return handleNotesEdit(shared, update);
  }

  return {};
}
