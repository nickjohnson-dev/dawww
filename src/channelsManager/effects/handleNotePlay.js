import getOr from 'lodash/fp/getOr';
import * as helpers from '../../helpers';
import { playNote } from '../../models/channel';

export function handleNotePlay(state, action) {
  const { trackId, pitch, length, time } = action.payload;
  const channel = getOr({}, `channels[${trackId}]`, state);
  const name = helpers.getPitchName(pitch);

  playNote(channel, name, length, time);
}
