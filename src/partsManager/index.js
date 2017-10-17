import { runEffects } from './effects';
import { reducer } from './reducer';

export function createPartsManager(shared) {
  return {
    getNewState(...args) {
      return reducer(...args, shared);
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
