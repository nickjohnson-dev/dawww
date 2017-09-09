import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as helpers from '../helpers';
import getChannel from './getChannel';

const state = {
  channels: {},
};

export default {
  loadSongData: (songData) => {
    state.channels = helpers.mapObj(getChannel, songData.tracks);
  },

  playNote: (trackId, pitch, length, time) => {
    const channel = getOr({}, `channels[${trackId}]`, state);
    const name = helpers.getPitchName(pitch);

    if (isEmpty(channel)) return;

    channel.instrument.playNote(name, length, time);
  },
};
