import * as selectors from '../selectors';

export default songData => (track) => {
  const isAnyTrackSoloing = selectors.getIsAnyTrackSoloing(songData);

  return {
    ...track,
    isAnyTrackSoloing,
  };
};
