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

test('should invoke Tone.Sequence constructor with args', (t) => {
  const expected = ['a', 'b', 'c'];
  const constructor = sinon.spy();
  class Sequence {
    constructor(...args) {
      constructor(...args);
    }
  }
  const toneAdapter = createToneAdapter({
    Sequence,
  });
  toneAdapter.createSequence('a', 'b', 'c');
  const result = constructor.lastCall.args;
  t.deepEqual(result, expected);
});
