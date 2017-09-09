import compose from 'lodash/fp/compose';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import formatNote from './formatNote';
import getSequenceData from './getSequenceData';

export default songData => (sequence) => {
  const filterBySequence = filter(note => note.sequenceId === sequence.id);
  const notesInSequence = compose(
    map(formatNote),
    filterBySequence,
  )(songData.notes);
  const data = getSequenceData(
    sequence.measureCount,
    notesInSequence,
  );

  return {
    ...sequence,
    data,
  };
};
