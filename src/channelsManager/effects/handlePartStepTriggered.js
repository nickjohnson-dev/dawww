import getOr from 'lodash/fp/getOr';
import * as helpers from '../../helpers';
import { playNote } from '../../models/channel';

export function handlePartStepTriggered(state, action) {
  const time = getOr(0, 'payload.time', action);
  const trackId = getOr('', 'payload.trackId', action);
  const channel = getOr({}, `channels[${trackId}]`, state);
  const noteIds = getOr([], 'payload.noteIds', action);

  noteIds.forEach((noteId) => {
    const note = getOr({}, `song.notes[${noteId}]`, state);
    const pitch = getOr(-1, 'points[0].y', note);
    const name = helpers.getPitchName(pitch);
    const length = helpers.getNoteLength(note);

    playNote(channel, name, length, time);
  });
}
