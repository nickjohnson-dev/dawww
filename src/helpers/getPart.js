import getOr from 'lodash/fp/getOr';
import range from 'lodash/fp/range';
import Tone from 'tone';
import { getDataFromNotes } from './getDataFromNotes';
import { measuresToTime } from './measuresToTime';

// TODO: createPart
export const getPart = ({ playNote, notes, sequence }) => {
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
  const part = new Tone.Sequence(onStep, steps, stepSize);

  part.start(measuresToTime(position));

  part.loop = false;

  return part;
};
