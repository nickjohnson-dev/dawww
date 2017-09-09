import omit from 'lodash/fp/omit';
import getChannel from './getChannel';

export default (channels = {}, action) => {
  switch (action.kind) {
    case 'A':
    case 'E':
    case 'N':
      return {
        ...channels,
        [action.track.id]: getChannel(action.track),
      };
    case 'D':
      return omit([action.id], channels);
    default:
      return channels;
  }
};
