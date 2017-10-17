import getOr from 'lodash/fp/getOr';
import * as helpers from '../../helpers';
import { playNote } from '../../models/instrument';

export function handleNotePlay(getState, action) {
  const { trackId, pitch, length, time } = action.payload;
  const instrument = getOr({}, `instruments[${trackId}]`, getState());
  const name = helpers.getPitchName(pitch);

  playNote(instrument, name, length, time);
}
