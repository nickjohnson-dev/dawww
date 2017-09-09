import getOr from 'lodash/fp/getOr';
import { mapObj } from '../helpers';
import formatSequence from './formatSequence';

export default (songData) => {
  const bpm = getOr(0, 'bpm', songData);
  const measureCount = getOr(0, 'measureCount', songData);
  const sequencesData = getOr({}, 'sequences', songData);
  const tracks = getOr({}, 'tracks', songData);
  const sequences = mapObj(formatSequence(songData), sequencesData);

  return {
    bpm,
    measureCount,
    sequences,
    tracks,
  };
};
