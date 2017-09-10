import getInstrument from './getInstrument';

export default (track) => {
  const instrument = getInstrument({
    track,
  });

  return {
    ...track,
    dispose: () => instrument.dispose(),
    instrument,
  };
};
