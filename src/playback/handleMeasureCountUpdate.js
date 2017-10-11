import getOr from 'lodash/fp/getOr';
import range from 'lodash/fp/range';
import Tone from 'tone';
import * as helpers from '../helpers';
import { cleanup } from './cleanup';

export function handleMeasureCountUpdate(update, shared) {
  const measureCount = getOr(0, 'song.measureCount', update);
  const loopEnd = helpers.measuresToTime(measureCount);
  const transportPart = new Tone.Sequence((_, position) => {
    shared.setPosition(position);
  }, range(0, measureCount * 32), '32n');

  Tone.Transport.setLoopPoints(0, loopEnd);

  Tone.Transport.loop = true;

  cleanup(shared);

  transportPart.start(0);

  return {
    transportPart,
  };
}
