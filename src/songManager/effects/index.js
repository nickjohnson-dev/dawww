import * as actions from '../../actions';
import { handleBPMChange } from './handleBPMChange';
import { handleSongUpdate } from './handleSongUpdate';

export function runEffects(state, action, dispatch, toneAdapter) {
  switch (action.type) {
    case actions.BPM_CHANGED:
      handleBPMChange(state, action, dispatch, toneAdapter);
      break;
    case actions.SONG_UPDATED:
      handleSongUpdate(state, action, dispatch, toneAdapter);
      break;
    default:
  }
}
