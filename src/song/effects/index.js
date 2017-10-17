import * as actions from '../../actions';
import { handleBPMEdit } from './handleBPMEdit';
import { handleSongUpdate } from './handleSongUpdate';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.BPM_EDITED:
      handleBPMEdit(getState, action, shared);
      break;
    case actions.SONG_UPDATED:
      handleSongUpdate(getState, action, shared);
      break;
    default:
  }
}
