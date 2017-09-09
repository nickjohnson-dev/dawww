import Tone from 'tone';
import instrument from '../instrument';
import onStateChange from './onStateChange';

const i = instrument.getInstrument('a', 'square');

export default {
  pause: () =>
    Tone.Transport.pause(),

  previewNote: (name, length, time) =>
    i.playNote(name, length, time),

  start: () =>
    Tone.Transport.start(),

  stop: () =>
    Tone.Transport.stop(),

  onStateChange,
};
