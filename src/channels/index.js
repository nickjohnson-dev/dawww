import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as helpers from '../helpers';
import { handleTracksUpdate } from './handleTracksUpdate';

export default (shared) => {
  const handleUpdate = (update) => {
    if (update.dataType === 'tracks') {
      handleTracksUpdate(update, shared.getState());
    }
  };

  const playNote = ({ trackId, pitch, length = '16n', time }) => {
    const state = shared.getState();
    const channel = getOr({}, `channels[${trackId}]`, state);
    const name = helpers.getPitchName(pitch);

    if (isEmpty(channel)) return;

    channel.instrument.playNote(name, length, time);
  };

  shared.bus.on('play', playNote);

  shared.bus.on('update', handleUpdate);

  return {
    handleUpdate,
    playNote,
  };
};
