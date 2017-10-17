import getOr from 'lodash/fp/getOr';
import * as helpers from '../../helpers';
import { playNote } from '../../models/channel';

export function handleNotePlay(getState, action) {
  const { trackId, pitch, length, time } = action.payload;
  const channel = getOr({}, `channels[${trackId}]`, getState());
  const name = helpers.getPitchName(pitch);

  playNote(channel, name, length, time);
}
