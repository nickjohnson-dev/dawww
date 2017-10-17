import getOr from 'lodash/fp/getOr';
import * as actions from '../actions';
import * as helpers from '../helpers';
import { playNote } from '../models/channel';
import { effects } from './effects';
import { reducer } from './reducer';

export function createChannelsManager(shared) {
  return {
    getNewState(state, action) {
      return reducer(state, action, shared);
    },

    performSideEffects(state, action) {
      effects(action, state, shared.emit);

      if (action.type === actions.NOTE_PLAYED) {
        const { trackId, pitch, length, time } = action.payload;

        const channel = getOr({}, `channels[${trackId}]`, state);
        const name = helpers.getPitchName(pitch);

        playNote(channel, name, length, time);
        return;
      }

      if (action.type === actions.SEQUENCE_STEP_TRIGGERED) {
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
    },
  };
}
