import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as helpers from '../../helpers';

export function handlePositionSetRequest(getState, action, shared) {
  const position = getOr(0, 'payload.position', action);
  const positionAsTime = helpers.sizeToTime(position);

  shared.toneAdapter.setTransportPosition(positionAsTime);

  shared.dispatch(actions.positionSet(position));
}
