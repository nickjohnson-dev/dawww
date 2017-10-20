import * as actions from '../../actions';
import { acceptSequenceDeletion } from './acceptSequenceDeletion';
import { disablePartLooping } from './disablePartLooping';
import { disposePart } from './disposePart';
import { reloadSequence } from './reloadSequence';
import { setPartEvents } from './setPartEvents';
import { startPart } from './startPart';
import { stopPart } from './stopPart';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      setPartEvents(getState, action, shared);
      startPart(getState, action, shared);
      disablePartLooping(getState, action, shared);
      break;
    case actions.SEQUENCE_DELETION_REQUESTED:
      disposePart(getState, action, shared);
      acceptSequenceDeletion(getState, action, shared);
      break;
    case actions.SEQUENCE_MEASURE_COUNT_EDITED:
      reloadSequence(getState, action, shared);
      break;
    case actions.SEQUENCE_POSITION_EDITED:
      stopPart(getState, action, shared);
      startPart(getState, action, shared);
      disablePartLooping(getState, action, shared);
      break;
    default:
  }
}
