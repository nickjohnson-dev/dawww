import forEach from 'lodash/fp/forEach';
import Tone from 'tone';

const time = new Tone.TransportTime();
let subscribers = [];

Tone.Transport.on('step', () => {
  forEach(cb => cb(time.toBarsBeatsSixteenths()), subscribers);
});

export default (subscriber) => {
  subscribers = [
    ...subscribers,
    subscriber,
  ];
};
