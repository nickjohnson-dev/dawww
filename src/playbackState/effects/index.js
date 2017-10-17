import * as actions from '../../actions';
import { handlePlaybackPauseRequest } from './handlePlaybackPauseRequest';
import { handlePlaybackStartRequest } from './handlePlaybackStartRequest';
import { handlePlaybackStopRequest } from './handlePlaybackStopRequest';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.PLAYBACK_PAUSE_REQUESTED:
      handlePlaybackPauseRequest(getState, action, shared);
      break;
    case actions.PLAYBACK_START_REQUESTED:
      handlePlaybackStartRequest(getState, action, shared);
      break;
    case actions.PLAYBACK_STOP_REQUESTED:
      handlePlaybackStopRequest(getState, action, shared);
      break;
    default:
  }
}
