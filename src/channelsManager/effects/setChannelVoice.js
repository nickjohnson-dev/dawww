import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import { setVoice } from '../../models/channel';

export function setChannelVoice(action, state) {
  const id = getOr('', 'payload.id', action);
  const channel = getOr({ setVoice: noop }, `channels[${id}]`, state);
  const voice = getOr(0, 'payload.value', action);

  setVoice(channel, voice);
}
