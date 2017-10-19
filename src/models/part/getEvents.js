import getOr from 'lodash/fp/getOr';
import invokeArgs from 'lodash/fp/invokeArgs';
import times from 'lodash/fp/times';

export function getEvents(part) {
  const events = [];
  const length = getOr(0, 'length', part);

  times((index) => {
    events[index] = invokeArgs('at', [index], part);
  }, length);

  return events;
}
