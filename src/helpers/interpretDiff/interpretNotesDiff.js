import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as constants from '../../constants';
import { interpretNoteAddedDiff } from './interpretNoteAddedDiff';
import { interpretNoteEditedDiff } from './interpretNoteEditedDiff';

export function interpretNotesDiff(diff) {
  switch (getOr('', 'kind', diff)) {
    case constants.diffKinds.N:
      return interpretNoteAddedDiff(diff);
    case constants.diffKinds.E:
      return interpretNoteEditedDiff(diff);
    default:
      return actions.unknown();
  }
}
