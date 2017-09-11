import { getInstrument } from './getInstrument';

export const getChannel = ({ isAnyTrackSoloing, track }) => {
  const instrument = getInstrument({
    isAnyTrackSoloing,
    track,
  });

  return {
    ...track,
    dispose: () => instrument.dispose(),
    mute: () => instrument.mute(),
    unmute: () => instrument.unmute(),
    instrument,
  };
};
