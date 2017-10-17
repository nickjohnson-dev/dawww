import getOr from 'lodash/fp/getOr';
import { setVoice } from '../../models/channel';

export function handleTrackVoiceEdit(getState, action) {
  const id = getOr('', 'payload.id', action);
  const channel = getOr({}, `channels[${id}]`, getState());
  const voice = getOr(0, 'payload.value', action);

  setVoice(channel, voice);
}
