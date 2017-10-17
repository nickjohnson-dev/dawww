import forEach from 'lodash/fp/forEach';
import getOr from 'lodash/fp/getOr';
import * as selectors from '../../selectors';
import { muteChannel, unmuteChannel } from '../../models/channel';

export function handleTrackMutingEdits(getState) {
  const channels = getOr({}, 'channels', getState());
  const anySolo = selectors.getIsAnyTrackSoloing(getState());

  forEach((channel) => {
    const mute = getOr(false, `song.tracks[${channel.id}].isMuted`, getState());
    const solo = getOr(false, `song.tracks[${channel.id}].isSoloing`, getState());
    const isOneOfSomeSoloingTracks = anySolo && !mute && solo;
    const noMutingOrSoloing = !anySolo && !mute && !solo;

    if (isOneOfSomeSoloingTracks || noMutingOrSoloing) {
      unmuteChannel(channel);
      return;
    }

    muteChannel(channel);
  }, channels);
}
