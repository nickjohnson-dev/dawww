import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import { setVolume } from '../../models/channel';

export function setChannelVolume(action, state) {
  const id = getOr('', 'payload.id', action);
  const channel = getOr({ setVolume: noop }, `channels[${id}]`, state);
  const volume = getOr(0, 'payload.value', action);

  setVolume(channel, volume);
}
