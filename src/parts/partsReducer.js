import omit from 'lodash/fp/omit';
import getPart from './getPart';

export default (parts = {}, action) => {
  switch (action.kind) {
    case 'A':
    case 'E':
    case 'N':
      return {
        ...parts,
        [action.sequence.id]: getPart(action.sequence),
      };
    case 'D':
      return omit([action.id], parts);
    default:
      return parts;
  }
};
