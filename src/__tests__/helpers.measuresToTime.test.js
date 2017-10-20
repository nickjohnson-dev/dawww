import test from 'ava';
import { measuresToTime } from '../helpers/measuresToTime';

test('should return (measureCount * 32 * 32n)', (t) => {
  const expected = '(32 * 32n)';
  const result = measuresToTime(1);
  t.is(result, expected);
});
