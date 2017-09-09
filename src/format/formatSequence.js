import compose from 'lodash/fp/compose';
import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import formatNote from './formatNote';

export default songData => (sequence) => {
  const isInSequence = note => note.sequenceId === sequence.id;
  const setAtPosition = reduce((acc, cur) => {
    const notesAtPosition = acc[cur.position] || [];
    return {
      ...acc,
      [cur.position]: [...notesAtPosition, cur],
    };
  }, {});
  const notes = compose(
    setAtPosition,
    map(formatNote(songData)),
    filter(isInSequence),
  )(songData.notes);

  return {
    ...sequence,
    notes,
  };
};
