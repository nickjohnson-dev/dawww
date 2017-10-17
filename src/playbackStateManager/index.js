import { runEffects } from './effects';

export function createPlaybackStateManager() {
  return {
    getNewState() {
      return '';
    },

    performSideEffects(...args) {
      runEffects(...args);
    },
  };
}
