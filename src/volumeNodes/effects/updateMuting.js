import getOr from 'lodash/fp/getOr';
import * as selectors from '../../selectors';
import { mute, unmute } from '../../models/volumeNode';

export function updateMuting(getState) {
  const volumeNodes = getOr({}, 'volumeNodes', getState());
  const anySolo = selectors.getIsAnyTrackSoloing(getState());

  Object.keys(volumeNodes).forEach((key) => {
    const volumeNode = volumeNodes[key];
    const isMuted = getOr(false, `song.tracks[${key}].isMuted`, getState());
    const isSoloing = getOr(false, `song.tracks[${key}].isSoloing`, getState());
    const isOneOfSomeSoloingTracks = anySolo && !isMuted && isSoloing;
    const noMutingOrSoloing = !anySolo && !isMuted && !isSoloing;

    if (isOneOfSomeSoloingTracks || noMutingOrSoloing) {
      unmute(volumeNode);
      return;
    }

    mute(volumeNode);
  });
}
