import forEach from 'lodash/fp/forEach';

export function getPositionNotifier(shared) {
  const handlePosition = (position) => {
    forEach(
      cb => cb(position),
      shared.getState().positionSubscribers,
    );
  };

  const subscribe = (fn) => {
    const state = shared.getState();

    shared.setState({
      positionSubscribers: [
        ...state.positionSubscribers,
        fn,
      ],
    });
  };

  shared.on('position', handlePosition);

  return {
    subscribe,
  };
}
