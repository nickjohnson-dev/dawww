import forEach from 'lodash/fp/forEach';
import Tone from 'tone';

let subscribers = [];

Tone.Transport.on('position', (position) => {
  forEach(cb => cb(position), subscribers);
});

export function onPositionChange(subscriber) {
  subscribers = [
    ...subscribers,
    subscriber,
  ];
}
