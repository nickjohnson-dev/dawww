import * as actions from '../../actions';
import { handleSequenceAdded } from './handleSequenceAdded';

export function runEffects(state, action, dispatch) {
  switch (action.type) {
    case actions.SEQUENCE_ADDED:
      handleSequenceAdded(state, action, dispatch);
      break;
    default:
  }
}
