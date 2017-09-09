import Tone from 'tone';
import { measuresToTime } from '../helpers';
import instrument from '../instrument';
import onStateChange from './onStateChange';
import onTimeChange from './onTimeChange';

const i = instrument.getInstrument('a', 'square');

export default {
  loadSongData: (songData) => {
    Tone.Transport.bpm.value = songData.bpm;
    Tone.Transport.setLoopPoints(0, measuresToTime(songData.measureCount));
    Tone.Transport.loop = true;
  },

  pause: () =>
    Tone.Transport.pause(),

  previewNote: (name, length, time) =>
    i.playNote(name, length, time),

  start: () =>
    Tone.Transport.start(),

  stop: () =>
    Tone.Transport.stop(),

  onStateChange,
  onTimeChange,
};
