import getInstrument from '../getInstrument';

export default (track) => {
  const instrument = getInstrument({
    track,
  });

  return {
    ...track,
    instrument,
  };
};
