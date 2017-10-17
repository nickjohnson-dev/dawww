import * as actions from '../../actions';
import { handleBPMEdit } from './handleBPMEdit';
import { handleSongUpdate } from './handleSongUpdate';

export function runEffects(state, action, shared) {
  switch (action.type) {
    case actions.BPM_EDITED:
      handleBPMEdit(state, action, shared);
      break;
    case actions.SONG_UPDATED:
      handleSongUpdate(state, action, shared);
      break;
    default:
  }
}
