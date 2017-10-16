import { reducer } from './reducer';
import { runEffects } from './effects';

export function createTransportPartManager(shared) {
  return {
    getNewState(...args) {
      return reducer(...args, shared);
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
