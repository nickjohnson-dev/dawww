import * as actions from '../../actions';
import { handlePlaybackPauseRequest } from './handlePlaybackPauseRequest';
import { handlePlaybackStartRequest } from './handlePlaybackStartRequest';
import { handlePlaybackStopRequest } from './handlePlaybackStopRequest';

export function runEffects(state, action, shared) {
  switch (action.type) {
    case actions.PLAYBACK_PAUSE_REQUESTED:
      handlePlaybackPauseRequest(state, action, shared);
      break;
    case actions.PLAYBACK_START_REQUESTED:
      handlePlaybackStartRequest(state, action, shared);
      break;
    case actions.PLAYBACK_STOP_REQUESTED:
      handlePlaybackStopRequest(state, action, shared);
      break;
    default:
  }
}
