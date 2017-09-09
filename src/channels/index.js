import getOr from 'lodash/fp/getOr';
import { mapObj } from '../helpers';
import getChannel from './getChannel';

const state = {
  channels: {},
};

export default {
  getByTrackId: id =>
    getOr({}, `channels[${id}]`, state),

  loadSongData: (songData) => {
    state.channels = mapObj(getChannel, songData.tracks);
  },
};
