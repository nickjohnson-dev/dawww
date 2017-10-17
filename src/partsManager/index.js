import { runEffects } from './effects';
import { reducer } from './reducer';

export function createPartsManager() {
  return {
    getNewState(...args) {
      return reducer(...args);
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
