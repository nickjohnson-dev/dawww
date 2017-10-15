import getOr from 'lodash/fp/getOr';
import range from 'lodash/fp/range';
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
  const steps = range(0, data.length);
  const stepSize = '32n';
  const part = toneAdapter.createSequence(onStep, steps, stepSize);

  part.start(measuresToTime(position));

  part.loop = false;

  return part;
}
