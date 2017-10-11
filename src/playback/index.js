import { handleBPMUpdate } from './handleBPMUpdate';
import { handleMeasureCountUpdate } from './handleMeasureCountUpdate';

export default (shared) => {
  shared.on('update', (update) => {
    if (update.dataType === 'bpm') {
      handleBPMUpdate(update, shared);
    }

    if (update.dataType === 'measureCount') {
      shared.setState(handleMeasureCountUpdate(update, shared));
    }
  });
};
