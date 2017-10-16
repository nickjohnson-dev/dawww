import getOr from 'lodash/fp/getOr';

export function handleBPMChange(state, action, dispatch, toneAdapter) {
  const bpm = getOr(0, 'payload.bpm', action);

  toneAdapter.setBPM(bpm);
}
