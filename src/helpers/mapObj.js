import curry from 'lodash/fp/curry';

export const mapObj = curry((iteratee, obj) =>
  Object.keys(obj).reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: iteratee(obj[cur]),
    }),
    {},
  ),
);
