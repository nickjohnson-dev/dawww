import test from 'ava';
import sinon from 'sinon';
import { handleMeasureCountEdit } from '../handleMeasureCountEdit';

test('should invoke models.part.startAtOffset with helpers.measuresToTime(loopStartPoint) and transportPart', (t) => {
  const expected = ['time:0', { id: 'a' }];
  const startAtOffset = sinon.spy();
  handleMeasureCountEdit(
    () => ({
      transportPart: { id: 'a' },
    }),
    {},
    {
      helpers: {
        measuresToTime: x => `time:${x}`,
      },
      models: {
        part: {
          disableLoop: () => {},
          startAtOffset,
        },
      },
      selectors: {
        getLoopEndPoint: () => {},
        getLoopStartPoint: () => '0',
      },
      toneAdapter: {
        setLoopPoints: () => {},
      },
    },
  );
  const result = startAtOffset.lastCall.args;
  t.deepEqual(result, expected);
});

test('should invoke models.part.disableLoop with transportPart', (t) => {
  const expected = [{ id: 'a' }];
  const disableLoop = sinon.spy();
  handleMeasureCountEdit(
    () => ({
      transportPart: { id: 'a' },
    }),
    {},
    {
      helpers: {
        measuresToTime: () => {},
      },
      models: {
        part: {
          startAtOffset: () => {},
          disableLoop,
        },
      },
      selectors: {
        getLoopEndPoint: () => {},
        getLoopStartPoint: () => '0',
      },
      toneAdapter: {
        setLoopPoints: () => {},
      },
    },
  );
  const result = disableLoop.lastCall.args;
  t.deepEqual(result, expected);
});
