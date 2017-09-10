import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import noop from 'lodash/fp/noop';
import some from 'lodash/fp/some';
import * as helpers from './helpers';

const getIsAnyTrackSoloing = compose(
  some(getOr(false, 'isSoloing')),
  getOr({}, 'song.tracks'),
);

export default (shared) => {
  const handleTracksUpdate = (update) => {
    const state = shared.getState();
    const id = getOr('', 'diff.path[1]', update);
    const channels = getOr({}, 'channels', state);
    const oldChannel = getOr({ dispose: noop }, id, channels);
    const kind = getOr('', 'diff.kind', update);
    const song = getOr({}, 'song', update);
    const track = getOr({}, `tracks[${id}]`, song);
    const channel = helpers.getChannel({
      isAnyTrackSoloing: getIsAnyTrackSoloing(update),
      track,
    });
    const action = { id, kind, channel };

    shared.setState({
      channels: helpers.reduceChannels(channels, action),
    });

    oldChannel.dispose();
  };

  const handleUpdate = (update) => {
    if (update.dataType === 'tracks') {
      handleTracksUpdate(update);
    }
  };

  const playNote = ({ trackId, pitch, length = '16n', time }) => {
    const state = shared.getState();
    const channel = getOr({}, `channels[${trackId}]`, state);
    const name = helpers.getPitchName(pitch);

    if (isEmpty(channel)) return;

    channel.instrument.playNote(name, length, time);
  };

  shared.bus.on('play', playNote);

  shared.bus.on('update', handleUpdate);

  return {
    handleUpdate,
    playNote,
  };
};
