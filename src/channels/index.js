import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as busChannels from '../busChannels';
import * as helpers from '../helpers';
import { effects } from './effects';
import { reducer } from './reducer';

export default (shared) => {
  shared.on(busChannels.NOTE_PLAYED, ({ trackId, pitch, length = '16n', time }) => {
    const state = shared.getState();
    const channel = getOr({}, `channels[${trackId}]`, state);
    const name = helpers.getPitchName(pitch);

    if (isEmpty(channel)) return;

    channel.playNote(name, length, time);
  });

  shared.on(busChannels.UPDATE_OCCURRED, (update) => {
    shared.setState({
      channels: reducer(
        shared.getState().channels,
        update.action,
      ),
    });
    effects(update.action, shared.getState(), shared.emit);
  });
};
