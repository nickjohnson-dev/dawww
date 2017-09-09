import { mapObj } from '../helpers';
import createSequence from './createSequence';

const state = {
  sequences: {},
};

export default {
  loadSongData: (songData) => {
    state.sequences = mapObj(createSequence, songData.sequences);
  },
};
