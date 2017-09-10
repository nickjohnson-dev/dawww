import getOr from 'lodash/fp/getOr';
import Tone from 'tone';

export default (options) => {
  const isAnyTrackSoloing = getOr(false, 'track.isAnyTrackSoloing', options);
  const isMuted = getOr(false, 'track.isMuted', options);
  const isSoloing = getOr(false, 'track.isSoloing', options);
  const type = getOr('sine', 'track.voice', options);
  const volume = getOr(0, 'track.volume', options);
  const synth = new Tone.PolySynth(5);

  synth.set({
    oscillator: {
      type,
    },
  });

  const volumeNode = new Tone.Volume(volume);
  volumeNode.mute = isMuted || (isAnyTrackSoloing && !isSoloing);

  return synth.chain(
    volumeNode,
    Tone.Master,
  );
};
