import getOr from 'lodash/fp/getOr';
import { mapObj } from '../helpers';
import getPart from './getPart';
import partsReducer from './partsReducer';

const state = {
  parts: {},
};

export default {
  handleUpdate: (update) => {
    const id = getOr('', 'difference.path[1]', update);
    const oldPart = getOr({ dispose: () => {} }, `parts[${id}]`, state);
    const kind = getOr('', 'difference.kind', update);
    const sequence = getOr({}, `song.sequences[${id}]`, update);

    state.parts = partsReducer(state.parts, { id, kind, sequence });

    oldPart.dispose();
  },

  loadSongData: (songData) => {
    state.parts = mapObj(getPart, songData.sequences);
  },
};
