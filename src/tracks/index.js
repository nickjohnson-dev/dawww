import getOr from 'lodash/fp/getOr';
import { mapObj } from '../helpers';
import getTrack from './getTrack';

const state = {
  tracks: {},
};

export default {
  get: id =>
    getOr({}, `tracks[${id}]`, state),

  loadSongData: (songData) => {
    state.tracks = mapObj(getTrack, songData.tracks);
  },
};
