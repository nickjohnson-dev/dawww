import range from 'lodash/fp/range';
import Tone from 'tone';
import { measuresToTime } from '../helpers';
import playback from '../playback';

export default function createPart({ data, position }) {
  const onStep = (time, step) => {
    console.log(new Tone.TransportTime().toBarsBeatsSixteenths());
    data[step].forEach((note) => {
      playback.previewNote(note.name, note.length, time);
    });
  };
  const steps = range(0, data.length);
  const stepSize = '32n';
  const part = new Tone.Sequence(onStep, steps, stepSize);

  part.start(measuresToTime(position));
  part.loop = false;

  return part;
}
