import getOr from 'lodash/fp/getOr';
import Tone from 'tone';

export function handleBPMUpdate(update) {
  const bpm = getOr(0, 'song.bpm', update);
  Tone.Transport.bpm.value = bpm;
}
