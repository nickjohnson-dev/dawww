import { reducer } from './reducer';
// import { handleNotesUpdate } from './handleNotesUpdate';
// import { handleSequencesUpdate } from './handleSequencesUpdate';

export function createPartsManager(shared) {
  return {
    getNewState(state, action) {
      return reducer(state, action, shared);
    },

    performSideEffects() {},
  };
}
