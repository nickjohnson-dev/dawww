import * as actions from '../../actions';
import { handleSequenceAdded } from './handleSequenceAdded';
import { handleSequenceDeletionRequested } from './handleSequenceDeletionRequested';
import { handleSequencePositionEdited } from './handleSequencePositionEdited';
import { reloadSequence } from './reloadSequence';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      handleSequenceAdded(getState, action, shared);
      break;
    case actions.SEQUENCE_DELETION_REQUESTED:
      handleSequenceDeletionRequested(getState, action, shared);
      break;
    case actions.SEQUENCE_MEASURE_COUNT_EDITED:
      reloadSequence(getState, action, shared);
      break;
    case actions.SEQUENCE_POSITION_EDITED:
      handleSequencePositionEdited(getState, action, shared);
      break;
    default:
  }
}
