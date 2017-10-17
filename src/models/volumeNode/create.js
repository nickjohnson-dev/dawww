import getOr from 'lodash/fp/getOr';

export function create(options, shared) {
  const isAnyTrackSoloing = getOr(false, 'isAnyTrackSoloing', options);
  const isMuted = getOr(false, 'track.isMuted', options);
  const isSoloing = getOr(false, 'track.isSoloing', options);
  const volume = getOr(0, 'track.volume', options);
  const volumeNode = shared.toneAdapter.createVolume(volume);

  volumeNode.mute = isMuted || (isAnyTrackSoloing && !isSoloing);

  return volumeNode;
}
