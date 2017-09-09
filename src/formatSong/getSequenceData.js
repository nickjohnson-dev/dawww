import getOr from 'lodash/fp/getOr';
import reduce from 'lodash/fp/reduce';
import times from 'lodash/fp/times';

const setAtPosition = reduce((acc, cur) => {
  const notesAtPosition = acc[cur.position] || [];
  return {
    ...acc,
    [cur.position]: [...notesAtPosition, cur],
  };
}, {});

export default (measureCount, notes) => {
  const dataCount = measureCount * 32;
  const getDataAtPositions = times(n => getOr([], n, setAtPosition(notes)));

  return getDataAtPositions(dataCount);
};
