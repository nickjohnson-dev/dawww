import curry from 'lodash/fp/curry';
import getEventEmitter from 'event-emitter';

const eventEmitter = getEventEmitter();

export const emit = channelName => (payload) => {
  eventEmitter.emit(channelName, payload);
};

export const on = curry((channelName, callback) => {
  eventEmitter.on(channelName, callback);
});
