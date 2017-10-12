import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import { disposePart } from '../models/part';

export function cleanup({ getState }) {
  const state = getState();
  const transportPart = getOr({}, 'transportPart', state);

  if (isEmpty(transportPart)) return;

  disposePart(transportPart);
}
