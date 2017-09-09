import getInstrument from '../getInstrument';

export default (track) => {
  const instrument = getInstrument(track.id, track.voice);

  return {
    ...track,
    instrument,
  };
};
