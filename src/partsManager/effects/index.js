import * as actions from '../../actions';
import { handleSequenceAdded } from './handleSequenceAdded';
import { handleSequenceDeletionRequested } from './handleSequenceDeletionRequested';

export function runEffects(state, action, dispatch) {
  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      handleSequenceAdded(state, action, dispatch);
      break;
    case actions.SEQUENCE_DELETION_REQUESTED:
      handleSequenceDeletionRequested(state, action, dispatch);
      break;
    default:
  }
}
