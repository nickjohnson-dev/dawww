import omit from 'lodash/fp/omit';

export default (parts = {}, action) => {
  switch (action.kind) {
    case 'A':
    case 'E':
    case 'N':
      return {
        ...parts,
        [action.id]: action.part,
      };
    case 'D':
      return omit([action.id], parts);
    default:
      return parts;
  }
};
