import range from 'lodash/fp/range';
import Tone from 'tone';
import playback from '../playback';

// createPart ::
// Sequence -> Array Array NoteData -> Server -> Part
export default function createPart(data) {
  const onStep = (time, step) =>
    data[step].forEach((note) => {
      playback.previewNote(note.name, note.length, time);
    });
  const steps = range(0, data.length);
  const stepSize = '32n';
  const part = new Tone.Sequence(onStep, steps, stepSize);

  part.start(0);

  return part;
}
