import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import range from 'lodash/fp/range';
import Tone from 'tone';
import * as helpers from './helpers';

export default (shared) => {
  const cleanup = () => {
    const state = shared.getState();
    const transportPart = getOr({}, 'transportPart', state);

    if (isEmpty(transportPart)) return;

    transportPart.dispose();
  };

  const handleBPMUpdate = (update) => {
    const bpm = getOr(0, 'song.bpm', update);
    Tone.Transport.bpm.value = bpm;
  };

  const handleMeasureCountUpdate = (update) => {
    const measureCount = getOr(0, 'song.measureCount', update);
    const loopEnd = helpers.measuresToTime(measureCount);
    const transportPart = new Tone.Sequence((_, position) => {
      shared.bus.emit('position', position);
    }, range(0, measureCount * 32), '32n');

    Tone.Transport.setLoopPoints(0, loopEnd);
    Tone.Transport.loop = true;
    cleanup();
    transportPart.start(0);
    shared.setState({ transportPart });
  };

  const handleUpdate = (update) => {
    if (update.dataType === 'bpm') {
      handleBPMUpdate(update);
    }

    if (update.dataType === 'measureCount') {
      handleMeasureCountUpdate(update);
    }
  };

  shared.bus.on('update', handleUpdate);

  return {
    handleUpdate,
  };
};
