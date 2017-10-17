import filter from 'lodash/fp/filter';
import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import uniq from 'lodash/fp/uniq';
import * as actions from '../../actions';

export function handleSequenceAdded(getState, action, shared) {
  const sequence = getOr({}, 'payload.sequence', action);
  const position = getOr(0, 'position', sequence);
  const trackId = getOr('', 'trackId', sequence);
  const allNotes = getOr({}, 'song.notes', getState());
  const notesInSequence = filter(
    n => n.sequenceId === sequence.id,
    allNotes,
  );
  const part = getOr({ at: noop }, `parts[${sequence.id}]`, getState());

  notesInSequence.forEach((note) => {
    const notePosition = getOr(-1, 'points[0].x', note);
    const step = part.at(notePosition);

    if (!step) return;

    const stepValue = step.value;
    const fn = (payload, time) => shared.dispatch(actions.partStepTriggered({
      noteIds: payload.noteIds,
      trackId: payload.trackId,
      time,
    }));
    const payload = {
      noteIds: uniq([...getOr([], 'value.payload.noteIds', stepValue), note.id]),
      trackId,
    };

    part.at(notePosition, { fn, payload });
  });

  part.start(shared.helpers.measuresToTime(position));

  part.loop = false;
}
