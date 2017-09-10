import * as constants from '../constants';
import { getLetterFromPitch } from './getLetterFromPitch';

export function getPitchName(pitch) {
  const octaveNumber = ((constants.octaveRange.length - 1) - Math.floor(pitch / 12));
  const letter = getLetterFromPitch(pitch);
  return `${letter}${octaveNumber}`;
}
