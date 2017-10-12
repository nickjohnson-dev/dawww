import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as busChannels from '../busChannels';
import { createPart } from '../models/part';
import { reducer } from './reducer';

export function handleNotesEdit(shared, update) {
  const noteId = getOr('', 'diff.path[1]', update);
  const notes = getOr({}, 'song.notes', update);
  const parts = getOr({}, 'parts', shared.getState());
  const id = getOr('', `[${noteId}].sequenceId`, notes);
  const oldPart = getOr({}, id, parts);
  const sequence = getOr({}, `song.sequences[${id}]`, update);
  const playNote = shared.emit(busChannels.NOTE_PLAYED);
  const part = createPart({ notes, playNote, sequence });
  const action = { kind: 'E', id, part };

  if (!isEmpty(oldPart)) {
    oldPart.dispose();
  }

  return {
    parts: reducer(parts, action),
  };
}
