import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as constants from '../../constants';
import { interpretNoteAddedDiff } from './interpretNoteAddedDiff';
import { interpretNoteArrayChangedDiff } from './interpretNoteArrayChangedDiff';
import { interpretNoteDeletedDiff } from './interpretNoteDeletedDiff';
import { interpretNoteEditedDiff } from './interpretNoteEditedDiff';

export function interpretNotesDiff(diff) {
  switch (getOr('', 'kind', diff)) {
    case constants.diffKinds.A:
      return interpretNoteArrayChangedDiff(diff);
    case constants.diffKinds.D:
      return interpretNoteDeletedDiff(diff);
    case constants.diffKinds.E:
      return interpretNoteEditedDiff(diff);
    case constants.diffKinds.N:
      return interpretNoteAddedDiff(diff);
    default:
      return actions.unknown();
  }
}
