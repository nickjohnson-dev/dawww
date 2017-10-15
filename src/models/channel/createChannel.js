import getOr from 'lodash/fp/getOr';

export function createChannel(options, { toneAdapter }) {
  const isAnyTrackSoloing = getOr(false, 'isAnyTrackSoloing', options);
  const id = getOr(false, 'track.id', options);
  const isMuted = getOr(false, 'track.isMuted', options);
  const isSoloing = getOr(false, 'track.isSoloing', options);
  const voice = getOr('', 'track.voice', options);
  const volume = getOr(0, 'track.volume', options);
  const instrument = toneAdapter.createInstrument(options);
  const volumeNode = toneAdapter.createVolume(volume);

  volumeNode.mute = isMuted || (isAnyTrackSoloing && !isSoloing);

  toneAdapter.chainToMaster(instrument, volumeNode);

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
