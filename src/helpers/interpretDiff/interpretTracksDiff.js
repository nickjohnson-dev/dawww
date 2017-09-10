import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as constants from '../../constants';
import { interpretTrackAddedDiff } from './interpretTrackAddedDiff';
import { interpretTrackDeletedDiff } from './interpretTrackDeletedDiff';
import { interpretTrackEditedDiff } from './interpretTrackEditedDiff';

export function interpretTracksDiff(diff) {
  switch (getOr('', 'kind', diff)) {
    case constants.diffKinds.D:
      return interpretTrackDeletedDiff(diff);
    case constants.diffKinds.E:
      return interpretTrackEditedDiff(diff);
    case constants.diffKinds.N:
      return interpretTrackAddedDiff(diff);
    default:
      return actions.unknown();
  }
}
