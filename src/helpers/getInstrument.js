import { getVoice } from './getVoice';

export const getInstrument = (options) => {
  const voice = getVoice(options);

  return {
    dispose: () => {
      voice.releaseAll();
      voice.dispose();
    },

    getType: () =>
      voice.oscillator.type,

    playNote: (name, length, time) =>
      voice.triggerAttackRelease(name, length, time),

    release: () =>
      voice.releaseAll(),

    setType: (newType) => {
      voice.oscillator.type = newType;
    },
  };
};
