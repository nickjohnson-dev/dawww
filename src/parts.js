import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as helpers from './helpers';

export default (shared) => {
  const handleNotesUpdate = (update) => {
    const state = shared.getState();
    const id = (
      getOr('', 'diff.lhs.sequenceId', update) ||
      getOr('', 'diff.rhs.sequenceId', update)
    );
    const parts = getOr({}, 'parts', state);
    const oldPart = getOr({ dispose: noop }, id, parts);
    const notes = getOr({}, 'song.notes', update);
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
    const id = (
      getOr('', 'diff.lhs.id', update) ||
      getOr('', 'diff.rhs.id', update)
    );
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

  const loadSongData = (songData) => {
    const notes = getOr({}, 'notes', songData);
    const sequences = getOr({}, 'sequences', songData);
    const playNote = args => shared.bus.emit('play', args);

    shared.setState({
      parts: helpers.mapObj(
        sequence => helpers.getPart({ notes, playNote, sequence }),
        sequences,
      ),
    });
  };

  shared.bus.on('update', handleUpdate);

  return {
    handleUpdate,
    loadSongData,
  };
};
