export function playNote(channel, name, length, time) {
  channel.instrument.triggerAttackRelease(name, length, time);
}
