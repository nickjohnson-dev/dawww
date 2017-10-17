import isFunction from 'lodash/fp/isFunction';

export function dispose(instrument) {
  if (!isFunction(instrument.dispose)) return;

  instrument.dispose();
}
