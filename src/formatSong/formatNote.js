import getOr from 'lodash/fp/getOr';
import * as helpers from '../helpers';

export default (note) => {
  const pitch = getOr(-1, 'points[0].y', note);
  const position = getOr(-1, 'points[0].x', note);

  return {
    length: helpers.getNoteLength(note),
    pitch,
    position,
  };
};
