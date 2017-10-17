import getOr from 'lodash/fp/getOr';
import { setVoice } from '../../models/instrument';

export function handleTrackVoiceEdit(getState, action) {
  const id = getOr('', 'payload.id', action);
  const instrument = getOr({}, `instruments[${id}]`, getState());
  const voice = getOr(0, 'payload.value', action);

  setVoice(instrument, voice);
}
