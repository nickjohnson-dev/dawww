import { mapObj } from '../helpers';
import createSequence from './createSequence';

const state = {
  sequences: {},
};

export default {
  loadSongData: (songData) => {
    console.log(songData.sequences);
    state.sequences = mapObj(createSequence, songData.sequences);
    console.log(state.sequences);
  },
};
