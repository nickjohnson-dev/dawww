import forEach from 'lodash/fp/forEach';
import getOr from 'lodash/fp/getOr';
import * as selectors from '../selectors';

export function handleSoloingTracksChanged(action, state) {
  const channels = getOr({}, 'channels', state);
  const isAnyTrackSoloing = selectors.getIsAnyTrackSoloing(state);

  forEach((channel) => {
    if (!isAnyTrackSoloing) {
      channel.unmute();
      return;
    }

    const isSoloing = getOr(false, `song.tracks[${channel.id}].isSoloing`, state);

    if (isSoloing) {
      channel.unmute();
      return;
    }

    channel.mute();
  }, channels);
}
