import isEmpty from 'lodash/fp/isEmpty';

export function playNote(instrument, name, length = '16n', time) {
  if (isEmpty(instrument)) return;

  instrument.triggerAttackRelease(name, length, time);
}
