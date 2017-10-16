import getOr from 'lodash/fp/getOr';
import isFunction from 'lodash/fp/isFunction';
import multiply from 'lodash/fp/multiply';
import { measuresToTime } from '../../helpers';

export function createPart({ sequence }, { toneAdapter }) {
  const position = getOr(0, 'position', sequence);
  const length = multiply(getOr(0, 'measureCount', sequence), 32);
  const onStep = (time, step) => {
    if (!isFunction(step.fn)) return;
    step.fn(step.payload, time);
  };
  const part = toneAdapter.createSequence(onStep, length);

  part.start(measuresToTime(position));

  part.loop = false;

  return part;
}
