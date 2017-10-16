import { runEffects } from './effects';
import { reducer } from './reducer';

export function createPartsManager(shared) {
  return {
    getNewState(state, action) {
      return reducer(state, action, shared);
    },

    performSideEffects(state, action, dispatch) {
      runEffects(state, action, dispatch);
    },
  };
}
