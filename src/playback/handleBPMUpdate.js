import getOr from 'lodash/fp/getOr';

export function handleBPMUpdate(update, { toneAdapter }) {
  const bpm = getOr(0, 'song.bpm', update);

  toneAdapter.setBPM(bpm);
}
