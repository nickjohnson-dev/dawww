import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import { interpretNotesDiff } from './interpretNotesDiff';
import { interpretSequencesDiff } from './interpretSequencesDiff';
import { interpretTracksDiff } from './interpretTracksDiff';

export function interpretDiff(diff, ...rest) {
  switch (getOr('', 'path[0]', diff)) {
    case 'notes':
      return interpretNotesDiff(diff, ...rest);
    case 'sequences':
      return interpretSequencesDiff(diff, ...rest);
    case 'tracks':
      return interpretTracksDiff(diff, ...rest);
    default:
      return actions.unknown();
  }
}
