import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as busChannels from '../busChannels';
import { createPart, disposePart } from '../models/part';
import { reducer } from './reducer';

export function handleNotesDelete(shared, update) {
  const id = getOr('', 'diff.lhs.sequenceId', update);
  const notes = getOr({}, 'song.notes', update);
  const parts = getOr({}, 'parts', shared.getState());
  const oldPart = getOr({}, id, parts);
  const sequence = getOr({}, `song.sequences[${id}]`, update);
  const playNote = shared.emit(busChannels.NOTE_PLAYED);
  const part = createPart({ notes, playNote, sequence }, shared);
  const action = { kind: 'E', id, part };

  if (!isEmpty(oldPart)) {
    disposePart(oldPart);
  }

  return {
    parts: reducer(parts, action),
  };
}
