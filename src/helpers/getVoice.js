import getOr from 'lodash/fp/getOr';
import Tone from 'tone';

export const getVoice = (options) => {
  const type = getOr('sine', 'track.voice', options);
  const voice = new Tone.PolySynth(5);

  voice.set({
    oscillator: {
      type,
    },
  });

  return voice;
};
