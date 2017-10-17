import * as actions from '../../actions';
import { handleSequenceAdded } from './handleSequenceAdded';
import { handleSequenceDeletionRequested } from './handleSequenceDeletionRequested';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      handleSequenceAdded(getState, action, shared);
      break;
    case actions.SEQUENCE_DELETION_REQUESTED:
      handleSequenceDeletionRequested(getState, action, shared);
      break;
    default:
  }
}
