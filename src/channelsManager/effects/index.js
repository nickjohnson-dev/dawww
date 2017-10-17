import * as actions from '../../actions';
import { handleNotePlay } from './handleNotePlay';
import { handlePartStepTriggered } from './handlePartStepTriggered';
import { handleTrackVoiceEdit } from './handleTrackVoiceEdit';
import { handleTrackVolumeEdit } from './handleTrackVolumeEdit';
import { handleTrackMutingEdits } from './handleTrackMutingEdits';

export function runEffects(state, action, dispatch, toneAdapter) {
  switch (action.type) {
    case actions.NOTE_PLAYED:
      handleNotePlay(state, action, dispatch, toneAdapter);
      break;
    case actions.PART_STEP_TRIGGERED:
      handlePartStepTriggered(state, action, dispatch, toneAdapter);
      break;
    case actions.TRACK_ADDED:
      handleTrackMutingEdits(state, action, dispatch, toneAdapter);
      break;
    case actions.TRACK_DELETED:
      handleTrackMutingEdits(state, action, dispatch, toneAdapter);
      break;
    case actions.TRACK_IS_MUTED_EDITED:
      handleTrackMutingEdits(state, action, dispatch, toneAdapter);
      break;
    case actions.TRACK_IS_SOLOING_EDITED:
      handleTrackMutingEdits(state, action, dispatch, toneAdapter);
      break;
    case actions.TRACK_VOICE_EDITED:
      handleTrackVoiceEdit(state, action, dispatch, toneAdapter);
      break;
    case actions.TRACK_VOLUME_EDITED:
      handleTrackVolumeEdit(state, action, dispatch, toneAdapter);
      break;
    default:
  }
}
