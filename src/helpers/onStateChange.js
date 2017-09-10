import forEach from 'lodash/fp/forEach';
import Tone from 'tone';
import * as constants from '../constants';

let playbackStateSubscribers = [];

Tone.Transport.on('pause-custom', handlePause);
Tone.Transport.on('start-custom', handleStart);
Tone.Transport.on('stop-custom', handleStop);

export function onStateChange(subscriber) {
  playbackStateSubscribers = [
    ...playbackStateSubscribers,
    subscriber,
  ];
}

function handlePause() {
  forEach(
    cb => cb(constants.playbackStates.PAUSED),
    playbackStateSubscribers,
  );
}

function handleStart() {
  forEach(
    cb => cb(constants.playbackStates.STARTED),
    playbackStateSubscribers,
  );
}

function handleStop() {
  forEach(
    cb => cb(constants.playbackStates.STOPPED),
    playbackStateSubscribers,
  );
  Tone.Transport.emit('position', 0);
  Tone.Transport.emit('time');
}
