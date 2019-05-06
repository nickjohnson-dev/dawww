import Tone from 'tone';

export function sizeToTime(size) {
  return (size + 1) * Tone.Time('32n');
}
