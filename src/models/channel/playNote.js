export function playNote(channel, name, length = '16n', time) {
  channel.instrument.triggerAttackRelease(name, length, time);
}
