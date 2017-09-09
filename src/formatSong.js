import filter from 'lodash/fp/filter';
import { mapObj } from './helpers';

export default songData => ({
  ...songData,
  sequences: mapObj(sequence => ({
    ...sequence,
    notes: filter(note => note.sequenceId === sequence.id, songData.notes),
  }), songData.sequences),
});
