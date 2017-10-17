import * as actions from '../../actions';
import { handleMeasureCountEdit } from './handleMeasureCountEdit';

export function runEffects(state, action, shared) {
  switch (action.type) {
    case actions.MEASURE_COUNT_EDITED:
      handleMeasureCountEdit(state, action, shared);
      break;
    default:
  }
}
