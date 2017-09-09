import compose from 'lodash/fp/compose';
import getOr from 'lodash/fp/getOr';
import some from 'lodash/fp/some';

const getTracks =
  getOr({}, 'tracks');

export const getIsAnyTrackSoloing = compose(
  some(getOr(false, 'isSoloing')),
  getTracks,
);
