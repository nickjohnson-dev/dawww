import * as actions from '../../actions';
import { handleMeasureCountEdit } from './handleMeasureCountEdit';

export function runEffects(state, action, dispatch, toneAdapter) {
  switch (action.type) {
    case actions.MEASURE_COUNT_EDITED:
      handleMeasureCountEdit(state, action, dispatch, toneAdapter);
      break;
    default:
  }
}
