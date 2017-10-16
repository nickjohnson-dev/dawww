import getOr from 'lodash/fp/getOr';
import * as actions from '../../../actions';

export function interpretBPMChangedDiff(diff) {
  const bpm = getOr(0, 'rhs', diff);

  return actions.bpmChanged(bpm);
}
