import * as actions from '../actions';
import { handleSoloingTracksChanged } from './handleSoloingTracksChanged';

export function effects(action, ...rest) {
  if (action.type === actions.TRACK_IS_SOLOING_EDITED) {
    handleSoloingTracksChanged(action, ...rest);
  }
}
