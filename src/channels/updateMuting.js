import forEach from 'lodash/fp/forEach';
import getOr from 'lodash/fp/getOr';
import * as selectors from '../selectors';

export function updateMuting(action, state) {
  const channels = getOr({}, 'channels', state);
  const anySolo = selectors.getIsAnyTrackSoloing(state);

  forEach((channel) => {
    const mute = getOr(false, `song.tracks[${channel.id}].isMuted`, state);
    const solo = getOr(false, `song.tracks[${channel.id}].isSoloing`, state);
    const isOneOfSomeSoloingTracks = anySolo && !mute && solo;
    const noMutingOrSoloing = !anySolo && !mute && !solo;

    if (isOneOfSomeSoloingTracks || noMutingOrSoloing) {
      channel.unmute();
      return;
    }

    channel.mute();
  }, channels);
}
