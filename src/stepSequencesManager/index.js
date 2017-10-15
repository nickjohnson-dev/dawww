import { reducer } from './reducer';

export function createStepSequencesManager(shared) {
  return {
    getNewState(state, action) {
      return reducer(state, action, shared);
    },

    performSideEffects() {

    },
  };
}
