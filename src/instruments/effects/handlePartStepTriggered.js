import getOr from 'lodash/fp/getOr';

export function handlePartStepTriggered(getState, action, shared) {
  const time = getOr(0, 'payload.time', action);
  const trackId = getOr('', 'payload.trackId', action);
  const instrument = getOr({}, `instruments[${trackId}]`, getState());
  const noteIds = getOr([], 'payload.noteIds', action);

  noteIds.forEach((noteId) => {
    const note = getOr({}, `song.notes[${noteId}]`, getState());
    const pitch = getOr(-1, 'points[0].y', note);
    const name = shared.helpers.getPitchName(pitch);
    const length = shared.helpers.getNoteLength(note);

    shared.models.instrument.playNote(instrument, name, length, time);
  });
}
