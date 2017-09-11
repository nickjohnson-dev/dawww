import { createInstrument } from './createInstrument';

export function createChannel({ isAnyTrackSoloing, track }) {
  const instrument = createInstrument({
    isAnyTrackSoloing,
    track,
  });

  return {
    ...track,
    dispose: instrument.dispose,
    mute: instrument.mute,
    setVoice: instrument.setVoice,
    setVolume: instrument.setVolume,
    unmute: instrument.unmute,
    instrument,
  };
}
