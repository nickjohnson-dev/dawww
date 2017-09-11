import getOr from 'lodash/fp/getOr';
import Tone from 'tone';
import { getVoice } from './getVoice';

export const getInstrument = (options) => {
  const isAnyTrackSoloing = getOr(false, 'isAnyTrackSoloing', options);
  const isMuted = getOr(false, 'track.isMuted', options);
  const isSoloing = getOr(false, 'track.isSoloing', options);
  const volume = getOr(0, 'track.volume', options);
  const voice = getVoice(options);

  const volumeNode = new Tone.Volume(volume);
  volumeNode.mute = isMuted || (isAnyTrackSoloing && !isSoloing);

  voice.chain(
    volumeNode,
    Tone.Master,
  );

  return {
    dispose: () => {
      voice.releaseAll();
      voice.dispose();
    },

    getType: () =>
      voice.oscillator.type,

    mute: () => {
      if (volumeNode.mute) return;
      volumeNode.mute = true;
    },

    unmute: () => {
      if (!volumeNode.mute) return;
      volumeNode.mute = false;
    },

    playNote: (name, length, time) =>
      voice.triggerAttackRelease(name, length, time),

    release: () =>
      voice.releaseAll(),

    setType: (newType) => {
      voice.oscillator.type = newType;
    },
  };
};
