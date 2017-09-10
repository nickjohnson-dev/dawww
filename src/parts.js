import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as helpers from './helpers';

export default (shared) => {
  const handleNotesUpdate = (update) => {
    const state = shared.getState();
    const noteId = getOr('', 'diff.path[1]', update);
    const notes = getOr({}, 'song.notes', update);
    const id = getOr('', `${noteId}.sequenceId`, notes);
    const parts = getOr({}, 'parts', state);
    const oldPart = getOr({ dispose: noop }, id, parts);
    const sequence = getOr({}, `song.sequences[${id}]`, update);
    const playNote = args => shared.bus.emit('play', args);
    const part = helpers.getPart({ notes, playNote, sequence });
    const action = { kind: 'E', id, part };

    shared.setState({
      parts: helpers.reduceParts(parts, action),
    });

    oldPart.dispose();
  };

  const handleSequencesUpdate = (update) => {
    const state = shared.getState();
    const id = getOr('', 'diff.path[1]', update);
    const parts = getOr({}, 'parts', state);
    const oldPart = getOr({ dispose: noop }, id, parts);
    const kind = getOr('', 'diff.kind', update);
    const notes = getOr({}, 'song.notes', update);
    const sequence = getOr({}, `song.sequences[${id}]`, update);
    const playNote = args => shared.bus.emit('play', args);
    const part = helpers.getPart({ notes, playNote, sequence });
    const action = { id, kind, part };

    shared.setState({
      parts: helpers.reduceParts(parts, action),
    });

    oldPart.dispose();
  };

  const handleUpdate = (update) => {
    if (update.dataType === 'notes') {
      handleNotesUpdate(update);
    }

    if (update.dataType === 'sequences') {
      handleSequencesUpdate(update);
    }
  };

  shared.bus.on('update', handleUpdate);

  return {
    handleUpdate,
  };
};
