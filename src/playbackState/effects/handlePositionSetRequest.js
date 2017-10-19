import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';

export function handlePositionSetRequest(getState, action, shared) {
  const loopStartPoint = shared.selectors.getLoopStartPoint(getState());
  const position = getOr(0, 'payload.position', action);
  const positionAsTime = shared.helpers.sizeToTime(((loopStartPoint * 32) + position) - 1);

  shared.toneAdapter.setTransportPosition(positionAsTime);

  shared.dispatch(actions.positionSet(position));
}
