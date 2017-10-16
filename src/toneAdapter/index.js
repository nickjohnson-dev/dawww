/* eslint-disable no-param-reassign */
import constant from 'lodash/fp/constant';
import getOr from 'lodash/fp/getOr';
import invokeArgs from 'lodash/fp/invokeArgs';
import noop from 'lodash/fp/noop';
import times from 'lodash/fp/times';
// eslint-disable-next-line lodash-fp/use-fp
import set from 'lodash/set';

export function createToneAdapter(Tone) {
  return {
    chainToMaster(source, ...rest) {
      invokeArgs('chain', [...rest, Tone.Master], source);
    },

    createInstrument(options) {
      const voice = getOr('sine', 'track.voice', options);
      const instrument = new Tone.PolySynth(5);

      invokeArgs('set', [{
        oscillator: {
          type: voice,
        },
      }], instrument);

      return instrument;
    },

    createSequence(onStep, length) {
      const Sequence = getOr(Object, 'Sequence', Tone);

      return new Sequence(onStep, times(constant({ fn: noop }), length), '32n');
    },

    createVolume(volume) {
      const Volume = getOr(Object, 'Volume', Tone);

      return new Volume(volume);
    },

    pause() {
      invokeArgs('Transport.pause', [], Tone);
    },

    setBPM(value) {
      set(Tone, 'Transport.bpm.value', value);
    },

    setLoopPoints(...args) {
      invokeArgs('Transport.setLoopPoints', args, Tone);
      set(Tone, 'Transport.loop', true);
    },

    start() {
      invokeArgs('Transport.start', [], Tone);
    },

    stop() {
      invokeArgs('Transport.stop', [], Tone);
    },
  };
}
