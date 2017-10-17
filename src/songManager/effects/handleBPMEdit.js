import getOr from 'lodash/fp/getOr';

export function handleBPMEdit(state, action, dispatch, toneAdapter) {
  const bpm = getOr(0, 'payload.bpm', action);

  toneAdapter.setBPM(bpm);
}
