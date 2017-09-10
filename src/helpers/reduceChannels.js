import omit from 'lodash/fp/omit';

export function reduceChannels(channels = {}, action) {
  switch (action.kind) {
    case 'A':
    case 'E':
    case 'N':
      return {
        ...channels,
        [action.id]: action.channel,
      };
    case 'D':
      return omit([action.id], channels);
    default:
      return channels;
  }
}
