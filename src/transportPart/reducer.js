import * as actions from '../actions';

export default function reducer(state = {}, action, shared) {
  switch (action.type) {
    case actions.MEASURE_COUNT_EDITED:
      return shared.models.part.create({
        measureCount: action.payload.measureCount,
        shared,
      });
    default:
      return state;
  }
}
