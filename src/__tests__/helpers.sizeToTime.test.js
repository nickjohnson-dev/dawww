import test from 'ava';
import { sizeToTime } from '../helpers/sizeToTime';

test('should return (size + 1 * 32n) as Tone time', (t) => {
  const expected = '(8 * 32n)';
  const result = sizeToTime(7);
  t.is(result, expected);
});
