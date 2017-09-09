import getVoice from './getVoice';

export default (id, type) => {
  const voice = getVoice({ type });

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
