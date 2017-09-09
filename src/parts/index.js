import { mapObj } from '../helpers';
import getPart from './getPart';

const state = {
  parts: {},
};

export default {
  loadSongData: (songData) => {
    state.parts = mapObj(getPart, songData.sequences);
  },
};
