import getOr from 'lodash/fp/getOr';
import { setVolume } from '../../models/volumeNode';

export function handleTrackVolumeEdit(getState, action) {
  const id = getOr('', 'payload.id', action);
  const volumeNode = getOr({}, `volumeNodes[${id}]`, getState());
  const volume = getOr(0, 'payload.value', action);

  setVolume(volumeNode, volume);
}
