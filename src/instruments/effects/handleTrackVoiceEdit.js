import getOr from 'lodash/fp/getOr';

export function handleTrackVoiceEdit(getState, action, shared) {
  const id = getOr('', 'payload.id', action);
  const instrument = getOr({}, `instruments[${id}]`, getState());
  const voice = getOr(0, 'payload.value', action);

  shared.models.instrument.setVoice(instrument, voice);
}
