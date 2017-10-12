export function setVoice(channel, value) {
  channel.instrument.set({
    oscillator: {
      type: value,
    },
  });
}
