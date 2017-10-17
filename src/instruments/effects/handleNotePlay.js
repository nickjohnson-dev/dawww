import getOr from 'lodash/fp/getOr';

export function handleNotePlay(getState, action, shared) {
  const { trackId, pitch, length, time } = action.payload;
  const instrument = getOr({}, `instruments[${trackId}]`, getState());
  const name = shared.helpers.getPitchName(pitch);

  shared.models.instrument.playNote(instrument, name, length, time);
}
