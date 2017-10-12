import getOr from 'lodash/fp/getOr';
import Tone from 'tone';
import { createVoice } from '../voice';

export function createChannel(options) {
  const isAnyTrackSoloing = getOr(false, 'isAnyTrackSoloing', options);
  const id = getOr(false, 'track.id', options);
  const isMuted = getOr(false, 'track.isMuted', options);
  const isSoloing = getOr(false, 'track.isSoloing', options);
  const voice = getOr('', 'track.voice', options);
  const volume = getOr(0, 'track.volume', options);
  const instrument = createVoice(options);
  const volumeNode = new Tone.Volume(volume);

  volumeNode.mute = isMuted || (isAnyTrackSoloing && !isSoloing);

  instrument.chain(
    volumeNode,
    Tone.Master,
  );

  return {
    id,
    instrument,
    isMuted,
    isSoloing,
    voice,
    volume,
    volumeNode,
  };
}
