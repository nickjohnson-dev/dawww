import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as busChannels from '../busChannels';
import * as helpers from '../helpers';

export function handleNotesDelete(shared, update) {
  const id = getOr('', 'diff.lhs.sequenceId', update);
  const notes = getOr({}, 'song.notes', update);
  const parts = getOr({}, 'parts', shared.getState());
  const oldPart = getOr({}, id, parts);
  const sequence = getOr({}, `song.sequences[${id}]`, update);
  const playNote = shared.emit(busChannels.NOTE_PLAYED);
  const part = helpers.getPart({ notes, playNote, sequence });
  const action = { kind: 'E', id, part };

  if (!isEmpty(oldPart)) {
    oldPart.dispose();
  }

  return {
    parts: helpers.reduceParts(parts, action),
  };
}
