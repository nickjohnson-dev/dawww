import * as actions from '../../actions';
import { handleMeasureCountChange } from './handleMeasureCountChange';

export function runEffects(state, action, dispatch, toneAdapter) {
  switch (action.type) {
    case actions.MEASURE_COUNT_CHANGED:
      handleMeasureCountChange(state, action, dispatch, toneAdapter);
      break;
    default:
  }
}
