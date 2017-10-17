import { reducer } from './reducer';
import { runEffects } from './effects';

export function createChannelsManager() {
  return {
    getNewState(...args) {
      return reducer(...args);
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
