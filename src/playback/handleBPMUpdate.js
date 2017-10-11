import getOr from 'lodash/fp/getOr';
import * as busChannels from '../busChannels';

export function handleBPMUpdate(update, { emit }) {
  const bpm = getOr(0, 'song.bpm', update);

  emit(busChannels.BPM_SET)(bpm);
}
