import range from 'lodash/fp/range';
import Tone from 'tone';
import { measuresToTime } from '../helpers';
import playback from '../playback';

export default ({ data, position, trackId }) => {
  const onStep = (time, step) => {
    data[step].forEach((note) => {
      playback.previewNote(trackId, note.name, note.length, time);
    });
  };
  const steps = range(0, data.length);
  const stepSize = '32n';
  const part = new Tone.Sequence(onStep, steps, stepSize);

  part.start(measuresToTime(position));
  part.loop = false;

  return part;
};
