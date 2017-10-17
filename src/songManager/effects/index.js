import * as actions from '../../actions';
import { handleBPMEdit } from './handleBPMEdit';
import { handleSongUpdate } from './handleSongUpdate';

export function runEffects(state, action, dispatch, toneAdapter) {
  switch (action.type) {
    case actions.BPM_EDITED:
      handleBPMEdit(state, action, dispatch, toneAdapter);
      break;
    case actions.SONG_UPDATED:
      handleSongUpdate(state, action, dispatch, toneAdapter);
      break;
    default:
  }
}
