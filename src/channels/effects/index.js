import noop from 'lodash/fp/noop';
import * as actions from '../../actions';
import { setChannelVoice } from './setChannelVoice';
import { setChannelVolume } from './setChannelVolume';
import { updateMuting } from './updateMuting';

export function effects(action, ...rest) {
  const effect = {
    [actions.TRACK_ADDED]: updateMuting,
    [actions.TRACK_DELETED]: updateMuting,
    [actions.TRACK_IS_MUTED_EDITED]: updateMuting,
    [actions.TRACK_IS_SOLOING_EDITED]: updateMuting,
    [actions.TRACK_VOICE_EDITED]: setChannelVoice,
    [actions.TRACK_VOLUME_EDITED]: setChannelVolume,
  }[action.type] || noop;

  effect(action, ...rest);
}
