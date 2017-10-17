import { reducer } from './reducer';
import { runEffects } from './effects';

export function createChannelsManager(shared) {
  return {
    getNewState(...args) {
      return reducer(...args, shared);
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
