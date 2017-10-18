import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as helpers from '../../helpers';
import * as selectors from '../../selectors';

export function handlePositionSetRequest(getState, action, shared) {
  const loopStartPoint = selectors.getLoopStartPoint(getState());
  const position = getOr(0, 'payload.position', action);
  const positionAsTime = helpers.sizeToTime(((loopStartPoint * 32) + position) - 1);

  shared.toneAdapter.setTransportPosition(positionAsTime);

  shared.dispatch(actions.positionSet(position));
}
