import test from 'ava';
import sinon from 'sinon';
import { createToneAdapter } from '../index';

test('should invoke Tone.Transport.start method', (t) => {
  const expected = true;
  const start = sinon.spy();
  const toneAdapter = createToneAdapter({
    Transport: {
      start,
    },
  });
  toneAdapter.start();
  const result = start.calledOnce;
  t.is(result, expected);
});
