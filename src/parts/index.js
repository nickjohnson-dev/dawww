/* eslint-disable no-param-reassign */
import getOr from 'lodash/fp/getOr';
import { mapObj } from '../helpers';
import getPart from './getPart';
import partsReducer from './partsReducer';


export default ({ channels, state }) => ({
  handleUpdate: (update) => {
    const id = getOr('', 'difference.path[1]', update);
    const oldPart = getOr({ dispose: () => {} }, `parts[${id}]`, state);
    const kind = getOr('', 'difference.kind', update);
    const sequence = getOr({}, `song.sequences[${id}]`, update);
    const part = getPart(channels.playNote)(sequence);

    state.parts = partsReducer(state.parts, { id, kind, part });

    oldPart.dispose();
  },

  loadSongData: (songData) => {
    state.parts = mapObj(getPart(channels.playNote), songData.sequences);
  },
});
