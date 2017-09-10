import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as constants from '../../constants';
import { interpretSequenceAddedDiff } from './interpretSequenceAddedDiff';
import { interpretSequenceDeletedDiff } from './interpretSequenceDeletedDiff';
import { interpretSequenceEditedDiff } from './interpretSequenceEditedDiff';

export function interpretSequencesDiff(diff) {
  switch (getOr('', 'kind', diff)) {
    case constants.diffKinds.D:
      return interpretSequenceDeletedDiff(diff);
    case constants.diffKinds.E:
      return interpretSequenceEditedDiff(diff);
    case constants.diffKinds.N:
      return interpretSequenceAddedDiff(diff);
    default:
      return actions.unknown();
  }
}
