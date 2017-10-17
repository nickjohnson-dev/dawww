import getOr from 'lodash/fp/getOr';
import * as helpers from '../../helpers';
import { playNote } from '../../models/instrument';

export function handlePartStepTriggered(getState, action) {
  const time = getOr(0, 'payload.time', action);
  const trackId = getOr('', 'payload.trackId', action);
  const instrument = getOr({}, `instruments[${trackId}]`, getState());
  const noteIds = getOr([], 'payload.noteIds', action);

  noteIds.forEach((noteId) => {
    const note = getOr({}, `song.notes[${noteId}]`, getState());
    const pitch = getOr(-1, 'points[0].y', note);
    const name = helpers.getPitchName(pitch);
    const length = helpers.getNoteLength(note);

    playNote(instrument, name, length, time);
  });
}
