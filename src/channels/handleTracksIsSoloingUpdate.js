import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import some from 'lodash/fp/some';
import * as helpers from '../helpers';

const getIsAnyTrackSoloing = compose(
  some(getOr(false, 'isSoloing')),
  getOr({}, 'song.tracks'),
);

export function handleTracksIsSoloingUpdate(update, state) {
  const id = getOr('', 'diff.path[1]', update);
  const channels = getOr({}, 'channels', state);
  const oldChannel = getOr({}, id, channels);
  const kind = getOr('', 'diff.kind', update);
  const song = getOr({}, 'song', update);
  const track = getOr({}, `tracks[${id}]`, song);
  const channel = helpers.getChannel({
    isAnyTrackSoloing: getIsAnyTrackSoloing(update),
    track,
  });
  const action = { id, kind, channel };

  if (!isEmpty(oldChannel)) {
    oldChannel.dispose();
  }

  return {
    channels: helpers.reduceChannels(channels, action),
  };
}
