import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as busChannels from '../busChannels';
import * as helpers from '../helpers';

export function handleSequencesUpdate(shared, update) {
  const state = shared.getState();
  const id = getOr('', 'diff.path[1]', update);
  const parts = getOr({}, 'parts', state);
  const oldPart = getOr({ dispose: noop }, id, parts);
  const kind = getOr('', 'diff.kind', update);
  const notes = getOr({}, 'song.notes', update);
  const sequence = getOr({}, `song.sequences[${id}]`, update);
  const playNote = shared.emit(busChannels.NOTE_PLAYED);
  const part = helpers.getPart({ notes, playNote, sequence });
  const action = { id, kind, part };

  oldPart.dispose();

  return {
    parts: helpers.reduceParts(parts, action),
  };
}
