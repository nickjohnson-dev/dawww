import deepDiff from 'deep-diff';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as busChannels from './busChannels';
import { interpretDiff } from './helpers';

export default ({ emit, getState, on, setState }) => {
  on(busChannels.UPDATE_REQUESTED, (song) => {
    if (isEmpty(song)) return;
    const prevSong = getState().song;
    const differences = deepDiff(prevSong, song) || [];

    setState({ song });

    const newState = getState();

    console.log('-----');
    console.log(differences[0]);
    console.log(interpretDiff(differences[0], newState));
    console.log('-----');

    differences.forEach((diff) => {
      const dataType = getOr('', 'path[0]', diff);
      const action = interpretDiff(diff, newState);

      emit(busChannels.UPDATE_OCCURRED)({
        action,
        dataType,
        diff,
        prevSong,
        song,
      });
    });
  });
};
