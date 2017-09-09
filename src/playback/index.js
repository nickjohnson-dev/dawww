import range from 'lodash/fp/range';
import Tone from 'tone';
import { measuresToTime } from '../helpers';
import channels from '../channels';
import onStateChange from './onStateChange';
import onTimeChange from './onTimeChange';

export default {
  loadSongData: (songData) => {
    Tone.Transport.bpm.value = songData.bpm;
    Tone.Transport.setLoopPoints(0, measuresToTime(songData.measureCount));
    Tone.Transport.loop = true;
    const part = new Tone.Sequence(() => {
      Tone.Transport.emit('step');
    }, range(0, songData.measureCount * 32), '32n');
    part.start();
  },

  pause: () =>
    Tone.Transport.pause(),

  playNote: (trackId, pitch, length, time) => {
    channels.playNote(trackId, pitch, length, time);
  },

  preview: (trackId, pitch) => {
    channels.playNote(trackId, pitch, '16n');
  },

  start: () =>
    Tone.Transport.start(),

  stop: () =>
    Tone.Transport.stop(),

  onStateChange,
  onTimeChange,
};
