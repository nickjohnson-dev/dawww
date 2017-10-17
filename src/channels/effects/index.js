import * as actions from '../../actions';
import { handleNotePlay } from './handleNotePlay';
import { handlePartStepTriggered } from './handlePartStepTriggered';
import { handleTrackVoiceEdit } from './handleTrackVoiceEdit';
import { handleTrackVolumeEdit } from './handleTrackVolumeEdit';
import { handleTrackMutingEdits } from './handleTrackMutingEdits';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.NOTE_PLAYED:
      handleNotePlay(getState, action, shared);
      break;
    case actions.PART_STEP_TRIGGERED:
      handlePartStepTriggered(getState, action, shared);
      break;
    case actions.TRACK_ADDED:
      handleTrackMutingEdits(getState, action, shared);
      break;
    case actions.TRACK_DELETED:
      handleTrackMutingEdits(getState, action, shared);
      break;
    case actions.TRACK_IS_MUTED_EDITED:
      handleTrackMutingEdits(getState, action, shared);
      break;
    case actions.TRACK_IS_SOLOING_EDITED:
      handleTrackMutingEdits(getState, action, shared);
      break;
    case actions.TRACK_VOICE_EDITED:
      handleTrackVoiceEdit(getState, action, shared);
      break;
    case actions.TRACK_VOLUME_EDITED:
      handleTrackVolumeEdit(getState, action, shared);
      break;
    default:
  }
}
