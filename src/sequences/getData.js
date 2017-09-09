import getOr from 'lodash/fp/getOr';
import times from 'lodash/fp/times';

export default (measureCount, notes) => {
  const getNotesAtPosition = n => getOr([], n, notes);

  return times(getNotesAtPosition, measureCount * 32);
};
