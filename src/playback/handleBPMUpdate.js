import getOr from 'lodash/fp/getOr';

export function handleBPMUpdate(update, shared) {
  const bpm = getOr(0, 'song.bpm', update);

  shared.setBPM(bpm);
}
