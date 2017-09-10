import getOr from 'lodash/fp/getOr';
import invoke from 'lodash/fp/invoke';
import range from 'lodash/fp/range';
import Tone from 'tone';
import * as helpers from './helpers';

export default (shared) => {
  const cleanup = () => invoke('state.transportPart.dispose', shared);

  const handleBPMUpdate = (update) => {
    const bpm = getOr(0, 'song.bpm', update);
    Tone.Transport.bpm.value = bpm;
  };

  const handleMeasureCountUpdate = (update) => {
    const measureCount = getOr(0, 'song.measureCount', update);
    const loopEnd = helpers.measuresToTime(measureCount);
    const transportPart = new Tone.Sequence(() => {
      Tone.Transport.emit('step');
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

  const loadSongData = (songData) => {
    const bpm = getOr(0, 'bpm', songData);
    const measureCount = getOr(0, 'measureCount', songData);
    const loopEnd = helpers.measuresToTime(measureCount);
    const transportPart = new Tone.Sequence(() => {
      Tone.Transport.emit('step');
    }, range(0, measureCount * 32), '32n');


    Tone.Transport.bpm.value = bpm;
    Tone.Transport.setLoopPoints(0, loopEnd);
    Tone.Transport.loop = true;
    transportPart.start(0);
    shared.setState({ transportPart });
  };

  shared.bus.on('update', handleUpdate);

  return {
    handleUpdate,
    loadSongData,
  };
};
