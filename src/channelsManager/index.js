import getOr from 'lodash/fp/getOr';
import * as busChannels from '../busChannels';
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

      if (action.type === busChannels.NOTE_PLAYED) {
        const { trackId, pitch, length, time } = action;

        const channel = getOr({}, `channels[${trackId}]`, state);
        const name = helpers.getPitchName(pitch);

        playNote(channel, name, length, time);
        return;
      }

      if (action.type === busChannels.STEP_SEQUENCE_STEP_TRIGGERED) {
        const { position, sequenceId, trackId, time } = action;

        const channel = getOr({}, `channels[${trackId}]`, state);
        const step = getOr({ notes: [] }, `sequenceSteps[${sequenceId}][${position}]`, state);

        step.notes.forEach(({ length, pitch }) => {
          const name = helpers.getPitchName(pitch);
          playNote(channel, name, length, time);
        });
      }
    },
  };
}
