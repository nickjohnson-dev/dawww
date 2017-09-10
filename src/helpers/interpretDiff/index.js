import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import { interpretNotesDiff } from './interpretNotesDiff';
import { interpretSequencesDiff } from './interpretSequencesDiff';
import { interpretTracksDiff } from './interpretTracksDiff';

export function interpretDiff(diff) {
  switch (getOr('', 'path[0]', diff)) {
    case 'notes':
      return interpretNotesDiff(diff);
    case 'sequences':
      return interpretSequencesDiff(diff);
    case 'tracks':
      return interpretTracksDiff(diff);
    default:
      return actions.unknown();
  }
}
