import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as helpers from '../helpers';

export function handleNotesEdit(update, state, emit) {
  const noteId = getOr('', 'diff.path[1]', update);
  const notes = getOr({}, 'song.notes', update);
  const parts = getOr({}, 'parts', state);
  const id = getOr('', `[${noteId}].sequenceId`, notes);
  const oldPart = getOr({}, id, parts);
  const sequence = getOr({}, `song.sequences[${id}]`, update);
  const playNote = args => emit('play', args);
  const part = helpers.getPart({ notes, playNote, sequence });
  const action = { kind: 'E', id, part };

  if (!isEmpty(oldPart)) {
    oldPart.dispose();
  }

  return {
    parts: helpers.reduceParts(parts, action),
  };
}
