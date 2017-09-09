import getOr from 'lodash/fp/getOr';
import Tone from 'tone';

export default (options) => {
  const detune = getOr(0, 'detune', options);
  const type = getOr('sine', 'type', options);
  const volume = getOr(-15, 'volume', options);
  const synth = new Tone.PolySynth(5);

  synth.set({
    oscillator: {
      type,
    },
    detune,
    volume,
  });

  return synth.toMaster();
};
