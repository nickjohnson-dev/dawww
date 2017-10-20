import set from 'lodash/set';

export function disableLoop(part) {
  set(part, 'loop', false);
}
