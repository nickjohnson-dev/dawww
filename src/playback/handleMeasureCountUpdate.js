import getOr from 'lodash/fp/getOr';
import * as busChannels from '../busChannels';
import * as helpers from '../helpers';
import { cleanup } from './cleanup';

export function handleMeasureCountUpdate(update, shared) {
  const measureCount = getOr(0, 'song.measureCount', update);
  const loopEnd = helpers.measuresToTime(measureCount);
  const onStep = (_, position) => {
    shared.emit(busChannels.POSITION_SET)(position);
  };
  const transportPart = shared.toneAdapter.createSequence(onStep, measureCount * 32);

  shared.toneAdapter.setLoopPoints(0, loopEnd);

  cleanup(shared);

  transportPart.start(0);

  return {
    transportPart,
  };
}
