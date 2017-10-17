import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';

export function handleSequencePositionEdited(getState, action, shared) {
  const id = getOr('', 'payload.id', action);
  const sequence = getOr({}, `song.sequences[${id}]`, getState());
  const position = getOr(0, 'position', sequence);
  const part = getOr({ start: noop }, `parts[${id}]`, getState());

  part.stop(0);
  part.start(shared.helpers.measuresToTime(position));

  part.loop = false;
}
