import getOr from 'lodash/fp/getOr';
import { setVolume } from '../../models/channel';

export function handleTrackVolumeEdit(state, action) {
  const id = getOr('', 'payload.id', action);
  const channel = getOr({}, `channels[${id}]`, state);
  const volume = getOr(0, 'payload.value', action);

  setVolume(channel, volume);
}