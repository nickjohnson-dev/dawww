import getOr from 'lodash/fp/getOr';
import diff from 'deep-diff';

export default (options) => {
  const song = getOr({}, 'song', options);

  return {
    updateSong: (newSong) => {
      console.log(diff(song, newSong));
    },
  };
};
