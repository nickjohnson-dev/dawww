import forEach from 'lodash/fp/forEach';
import Tone from 'tone';

const time = new Tone.TransportTime();
let subscribers = [];

Tone.Transport.on('time', () => {
  forEach(cb => cb(time.toBarsBeatsSixteenths()), subscribers);
});

export function onTimeChange(subscriber) {
  subscribers = [
    ...subscribers,
    subscriber,
  ];
}
