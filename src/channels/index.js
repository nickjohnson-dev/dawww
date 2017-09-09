import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import * as helpers from '../helpers';
import channelsReducer from './channelsReducer';
import getChannel from './getChannel';

const state = {
  channels: {},
};

export default {
  handleUpdate: (update) => {
    const id = getOr('', 'difference.path[1]', update);
    const oldChannel = getOr({ dispose: () => {} }, `channels[${id}]`, state);
    const kind = getOr('', 'difference.kind', update);
    const track = getOr({}, `song.tracks[${id}]`, update);

    state.channels = channelsReducer(state.channels, { id, kind, track });

    oldChannel.dispose();
  },

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
