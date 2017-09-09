import range from 'lodash/fp/range';
import Tone from 'tone';
import { measuresToTime } from '../helpers';
import tracks from '../tracks';
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

  previewNote: (trackId, name, length, time) => {
    const track = tracks.get(trackId);
    track.instrument.playNote(name, length, time);
  },

  start: () =>
    Tone.Transport.start(),

  stop: () =>
    Tone.Transport.stop(),

  onStateChange,
  onTimeChange,
};
