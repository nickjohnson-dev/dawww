import filter from 'lodash/fp/filter';
import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import uniq from 'lodash/fp/uniq';
import * as actions from '../../actions';

export function handleSequenceAdded(state, action, shared) {
  const sequence = getOr({}, 'payload.sequence', action);
  const trackId = getOr('', 'trackId', sequence);
  const allNotes = getOr({}, 'song.notes', state);
  const notesInSequence = filter(
    n => n.sequenceId === sequence.id,
    allNotes,
  );
  const part = getOr({ at: noop }, `parts[${sequence.id}]`, state);

  notesInSequence.forEach((note) => {
    const position = getOr(-1, 'points[0].x', note);
    const step = part.at(position).value;
    const fn = (payload, time) => shared.dispatch(actions.partStepTriggered({
      noteIds: payload.noteIds,
      trackId: payload.trackId,
      time,
    }));
    const payload = {
      noteIds: uniq([...getOr([], 'value.payload.noteIds', step), note.id]),
      trackId,
    };

    part.at(position, { fn, payload });
  });
}
