import { mapObj } from '../helpers';
import getSequence from './getSequence';

const state = {
  sequences: {},
};

export default {
  loadSongData: (songData) => {
    state.sequences = mapObj(getSequence, songData.sequences);
  },
};
