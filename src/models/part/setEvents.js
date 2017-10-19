import getOr from 'lodash/fp/getOr';
import invokeArgs from 'lodash/fp/invokeArgs';
import times from 'lodash/fp/times';

export function setEvents(events, part) {
  const length = getOr(0, 'length', part);

  times((index) => {
    const event = getOr({}, index, events);
    invokeArgs('at', [index, event], part);
  }, length);
}
