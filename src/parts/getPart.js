import range from 'lodash/fp/range';
import Tone from 'tone';
import { measuresToTime } from '../helpers';

export default playNote => ({ data, position, trackId }) => {
  const onStep = (time, step) => {
    data[step].forEach((note) => {
      playNote(trackId, note.pitch, note.length, time);
    });
  };
  const steps = range(0, data.length);
  const stepSize = '32n';
  const part = new Tone.Sequence(onStep, steps, stepSize);

  part.start(measuresToTime(position));
  part.loop = false;

  return part;
};
