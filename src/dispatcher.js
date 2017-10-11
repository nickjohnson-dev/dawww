import isEmpty from 'lodash/fp/isEmpty';
import * as busChannels from './busChannels';
import { dispatchUpdates } from './helpers';

export default ({ emit, getState, on, setState }) => {
  on(busChannels.UPDATE_REQUESTED, (song) => {
    if (isEmpty(song)) return;

    const prevSong = getState().song;

    setState({ song });

    dispatchUpdates({
      dispatch: emit(busChannels.UPDATE_OCCURRED),
      emit,
      state: getState(),
      prevSong,
      song,
    });
  });
};
