import isFunction from 'lodash/fp/isFunction';
import multiply from 'lodash/fp/multiply';
import { measuresToTime } from '../../helpers';

export function createPart({ measureCount = 0, position = 0, shared }) {
  const length = multiply(measureCount, 32);
  const onStep = (time, step) => {
    if (!isFunction(step.fn)) return;
    step.fn(step.payload, time);
  };
  const part = shared.toneAdapter.createSequence(onStep, length);

  part.start(measuresToTime(position));

  part.loop = false;

  return part;
}
