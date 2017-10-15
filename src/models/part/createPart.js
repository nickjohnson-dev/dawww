import getOr from 'lodash/fp/getOr';
import { getDataFromNotes, measuresToTime } from '../../helpers';

export function createPart({ playNote, notes, sequence }, { toneAdapter }) {
  const position = getOr(0, 'position', sequence);
  const trackId = getOr('', 'trackId', sequence);
  const data = getDataFromNotes(notes, sequence);
  const onStep = (time, step) => {
    data[step].forEach((note) => {
      playNote({
        trackId,
        time,
        ...note,
      });
    });
  };
  const part = toneAdapter.createSequence(onStep, data.length);

  part.start(measuresToTime(position));

  part.loop = false;

  return part;
}
