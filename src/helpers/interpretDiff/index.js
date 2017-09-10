import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import { interpretNotesDiff } from './interpretNotesDiff';

export function interpretDiff(diff) {
  switch (getOr('', 'path[0]', diff)) {
    case 'notes':
      return interpretNotesDiff(diff);
    default:
      return actions.unknown();
  }
}
