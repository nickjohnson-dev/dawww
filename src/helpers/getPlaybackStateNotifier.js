import forEach from 'lodash/fp/forEach';
import * as constants from '../constants';

export function getPlaybackStateNotifier({ emit, getState, on, setState }) {
  const handlePause = () => {
    forEach(
      cb => cb(constants.playbackStates.PAUSED),
      getState().playbackStateSubscribers,
    );
  };

  const handleStart = () => {
    forEach(
      cb => cb(constants.playbackStates.STARTED),
      getState().playbackStateSubscribers,
    );
  };

  const handleStop = () => {
    forEach(
      cb => cb(constants.playbackStates.STOPPED),
      getState().playbackStateSubscribers,
    );
    emit('position')(0);
  };

  const subscribe = (fn) => {
    const state = getState();

    setState({
      playbackStateSubscribers: [
        ...state.playbackStateSubscribers,
        fn,
      ],
    });
  };

  on('pause', handlePause);
  on('start', handleStart);
  on('stop', handleStop);

  return {
    subscribe,
  };
}
