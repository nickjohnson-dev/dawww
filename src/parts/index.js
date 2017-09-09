import getOr from 'lodash/fp/getOr';
import omit from 'lodash/fp/omit';
import { mapObj } from '../helpers';
import getPart from './getPart';

const state = {
  parts: {},
};

export default {
  loadSongData: (songData) => {
    state.parts = mapObj(getPart, songData.sequences);
  },

  handleUpdate: ({ difference, song }) => {
    const id = getOr('', 'path[1]', difference);
    const oldPart = getOr({ dispose: () => {} }, `parts[${id}]`, state);
    const newSequence = getOr({}, `sequences['${id}']`, song);
    const parts = {
      ...omit([oldPart], state.parts),
      [newSequence.id]: getPart(newSequence),
    };

    state.parts = parts;

    oldPart.dispose();
  },
};
