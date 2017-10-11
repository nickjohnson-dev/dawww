import forEach from 'lodash/fp/forEach';
import * as constants from '../constants';

export function getPlaybackStateNotifier(shared) {
  const handlePause = () => {
    forEach(
      cb => cb(constants.playbackStates.PAUSED),
      shared.getState().playbackStateSubscribers,
    );
  };

  const handleStart = () => {
    forEach(
      cb => cb(constants.playbackStates.STARTED),
      shared.getState().playbackStateSubscribers,
    );
  };

  const handleStop = () => {
    forEach(
      cb => cb(constants.playbackStates.STOPPED),
      shared.getState().playbackStateSubscribers,
    );
    shared.emit('position', 0);
  };

  const subscribe = (fn) => {
    const state = shared.getState();

    shared.setState({
      playbackStateSubscribers: [
        ...state.playbackStateSubscribers,
        fn,
      ],
    });
  };

  shared.on('pause', handlePause);
  shared.on('start', handleStart);
  shared.on('stop', handleStop);

  return {
    subscribe,
  };
}
