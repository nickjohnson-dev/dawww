export function playNote(instrument, name, length = '16n', time) {
  instrument.triggerAttackRelease(name, length, time);
}
