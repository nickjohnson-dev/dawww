import compose from 'lodash/fp/compose';
import curry from 'lodash/fp/curry';
import filter from 'lodash/fp/filter';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import times from 'lodash/fp/times';
import { getNoteLength } from './getNoteLength';

const stackAt = curry((property, xs) =>
  reduce((acc, cur) => {
    const key = cur[property];
    const currentStack = acc[key] || [];
    return {
      ...acc,
      [key]: [...currentStack, cur],
    };
  }, {}, xs),
);

export function getDataFromNotes(notes, sequence) {
  const measureCount = getOr(0, 'measureCount', sequence);
  const filterBySequence = filter(note => note.sequenceId === sequence.id);
  const getNotePitch = getOr(-1, 'points[0].y');
  const getNotePosition = getOr(-1, 'points[0].x');
  const formatNote = note => ({
    length: getNoteLength(note),
    pitch: getNotePitch(note),
    position: getNotePosition(note),
  });
  const notesInSequence = compose(
    map(formatNote),
    filterBySequence,
  )(notes);
  const dataCount = measureCount * 32;
  const getDataAtPositions = times(n => getOr([], n, stackAt('position', notesInSequence)));

  return getDataAtPositions(dataCount);
}
