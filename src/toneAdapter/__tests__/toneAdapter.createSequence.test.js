import test from 'ava';
import sinon from 'sinon';
import { createToneAdapter } from '../index';

test('should return instance of Tone.Sequence ', (t) => {
  const expected = true;
  class Sequence {}
  const toneAdapter = createToneAdapter({
    Sequence,
  });
  const returnValue = toneAdapter.createSequence();
  const result = returnValue instanceof Sequence;
  t.is(result, expected);
});

test('should invoke Tone.Sequence constructor with onStep, number range with length === length, "32n"', (t) => {
  const onStep = () => {};
  const expected = [onStep, [0, 1, 2], '32n'];
  const constructor = sinon.spy();
  class Sequence {
    constructor(...args) {
      constructor(...args);
    }
  }
  const toneAdapter = createToneAdapter({
    Sequence,
  });
  toneAdapter.createSequence(onStep, 3);
  const result = constructor.lastCall.args;
  t.deepEqual(result, expected);
});
