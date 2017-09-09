import forEach from 'lodash/fp/forEach';
import Tone from 'tone';
import * as constants from '../constants';

let playbackStateSubscribers = [];

Tone.Transport.on('pause', handlePause);
Tone.Transport.on('start', handleStart);
Tone.Transport.on('stop', handleStop);

export default (subscriber) => {
  playbackStateSubscribers = [
    ...playbackStateSubscribers,
    subscriber,
  ];
};

function handlePause() {
  forEach(
    callback => callback(constants.playbackStates.PAUSED),
    playbackStateSubscribers,
  );
}

function handleStart() {
  forEach(
    callback => callback(constants.playbackStates.STARTED),
    playbackStateSubscribers,
  );
}

function handleStop() {
  forEach(
    callback => callback(constants.playbackStates.STOPPED),
    playbackStateSubscribers,
  );
}
