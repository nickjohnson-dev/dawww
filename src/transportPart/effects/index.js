import * as actions from '../../actions';
import { handleMeasureCountEdit } from './handleMeasureCountEdit';

export default function effects(getState, action, shared) {
  switch (action.type) {
    case actions.MEASURE_COUNT_EDITED:
      handleMeasureCountEdit(getState, action, shared);
      break;
    default:
  }
}
