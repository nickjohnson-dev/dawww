import test from 'ava';
import sinon from 'sinon';
import { createToneAdapter } from '../index';

test('should invoke Tone.Transport.stop method', (t) => {
  const expected = true;
  const stop = sinon.spy();
  const toneAdapter = createToneAdapter({
    Transport: {
      stop,
    },
  });
  toneAdapter.stop();
  const result = stop.calledOnce;
  t.is(result, expected);
});
