import { reducer } from './reducer';
import { runEffects } from './effects';

export function createTransportPartManager() {
  return {
    getNewState(...args) {
      return reducer(...args);
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
