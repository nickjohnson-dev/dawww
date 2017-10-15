import getOr from 'lodash/fp/getOr';
import range from 'lodash/fp/range';
import * as busChannels from '../busChannels';
import * as helpers from '../helpers';
import { cleanup } from './cleanup';

export function handleMeasureCountUpdate(update, shared) {
  const measureCount = getOr(0, 'song.measureCount', update);
  const loopEnd = helpers.measuresToTime(measureCount);
  const transportPart = shared.toneAdapter.createSequence((_, position) => {
    shared.emit(busChannels.POSITION_SET)(position);
  }, range(0, measureCount * 32), '32n');

  shared.toneAdapter.setLoopPoints(0, loopEnd);

  cleanup(shared);

  transportPart.start(0);

  return {
    transportPart,
  };
}
