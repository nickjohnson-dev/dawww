import { handleNotesUpdate } from './handleNotesUpdate';
import { handleSequencesUpdate } from './handleSequencesUpdate';

export default (shared) => {
  shared.on('update', (update) => {
    if (update.dataType === 'notes') {
      shared.setState(handleNotesUpdate(shared, update));
    }

    if (update.dataType === 'sequences') {
      shared.setState(handleSequencesUpdate(shared, update));
    }
  });
};
