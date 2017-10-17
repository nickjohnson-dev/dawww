import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';

export function handleSequenceDeletionRequested(getState, action, shared) {
  const sequence = getOr({}, 'payload.sequence', action);
  const id = getOr('', 'id', sequence);
  const part = getOr({}, `parts[${id}]`, getState());

  shared.models.part.dispose(part);

  shared.dispatch(actions.sequenceDeletionAccepted(sequence));
}
