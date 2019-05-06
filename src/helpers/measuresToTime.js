import Tone from 'tone';

export function measuresToTime(measures) {
  return Math.floor(measures * 32) * Tone.Time('32n');
}
