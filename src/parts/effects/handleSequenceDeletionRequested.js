import getOr from 'lodash/fp/getOr';
import noop from 'lodash/fp/noop';
import * as actions from '../../actions';
import { disposePart } from '../../models/part';

export function handleSequenceDeletionRequested(getState, action, shared) {
  const sequence = getOr({}, 'payload.sequence', action);
  const id = getOr('', 'id', sequence);
  const part = getOr({ at: noop }, `parts[${id}]`, getState());

  disposePart(part);

  shared.dispatch(actions.sequenceDeletionAccepted(sequence));
}
