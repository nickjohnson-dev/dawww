import filter from 'lodash/fp/filter';
import { mapObj } from './helpers';

export default songData => ({
  bpm: songData.bpm,
  id: songData.id,
  title: songData.title,
  sequences: mapObj(sequence => ({
    ...sequence,
    notes: filter(note => note.sequenceId === sequence.id, songData.notes),
  }), songData.sequences),
});
