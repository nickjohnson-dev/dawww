export function setVoice(instrument, value) {
  instrument.set({
    oscillator: {
      type: value,
    },
  });
}
