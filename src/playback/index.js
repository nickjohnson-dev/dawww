/* eslint-disable no-param-reassign */
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import range from 'lodash/fp/range';
import Tone from 'tone';
import { measuresToTime } from '../helpers';
import onStateChange from './onStateChange';
import onTimeChange from './onTimeChange';

export default ({ state }) => ({
  loadSongData: (songData) => {
    Tone.Transport.bpm.value = songData.bpm;
    Tone.Transport.setLoopPoints(0, measuresToTime(songData.measureCount));
    Tone.Transport.loop = true;
    state.transportPart = new Tone.Sequence(() => {
      Tone.Transport.emit('step');
    }, range(0, songData.measureCount * 32), '32n');
    state.transportPart.start(0);
  },

  handleUpdate: (update) => {
    const bpm = getOr(0, 'song.bpm', update);
    const measureCount = getOr(0, 'song.measureCount', update);
    Tone.Transport.bpm.value = bpm;
    Tone.Transport.setLoopPoints(0, measuresToTime(measureCount));
    Tone.Transport.loop = true;

    if (!isEmpty(state.transportPart)) {
      state.transportPart.stop();
      state.transportPart.cancel();
      state.transportPart.dispose();
    }

    state.transportPart = new Tone.Sequence(() => {
      Tone.Transport.emit('step');
    }, range(0, measureCount * 32), '32n');

    state.transportPart.start(0);
  },

  pause: () =>
    Tone.Transport.pause(),

  start: () =>
    Tone.Transport.start(),

  stop: () =>
    Tone.Transport.stop(),

  onStateChange,
  onTimeChange,
});
