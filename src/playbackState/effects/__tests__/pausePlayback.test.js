import test from 'ava';
import sinon from 'sinon';
import * as actions from '../../../actions';
import * as constants from '../../../constants';
import { pausePlayback } from '../pausePlayback';

test('should invoke toneAdapter.pause, dispatch with actions.playbackStateSet(constants.playbackStates.PAUSED)', (t) => {
  const dispatch = sinon.spy();
  const pause = sinon.spy();
  pausePlayback(
    () => ({}),
    {},
    {
      toneAdapter: {
        pause,
      },
      dispatch,
    },
  );
  t.deepEqual(dispatch.lastCall.args, [actions.playbackStateSet(constants.playbackStates.PAUSED)]);
  t.deepEqual(pause.calledOnce, true);
});
