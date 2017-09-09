import forEach from 'lodash/fp/forEach';
import Tone from 'tone';

let subscribers = [];

Tone.Transport.on('step', () => {
  const time = new Tone.TransportTime().toBarsBeatsSixteenths();
  forEach(cb => cb(time), subscribers);
});

export default (subscriber) => {
  subscribers = [
    ...subscribers,
    subscriber,
  ];
};
