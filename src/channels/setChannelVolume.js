import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';

export function setChannelVolume(action, state) {
  const id = getOr('', 'payload.id', action);
  const channel = getOr({ setVolume: noop }, `channels[${id}]`, state);
  const volume = getOr(0, 'payload.value', action);

  channel.setVolume(volume);
}
