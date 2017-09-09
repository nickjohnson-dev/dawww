import getVoice from './getVoice';

export default (options) => {
  const voice = getVoice(options);

  return {
    dispose: () =>
      voice.dispose(),

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
