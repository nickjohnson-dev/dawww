import getOr from 'lodash/fp/getOr';
import * as actions from '../../actions';
import * as constants from '../../constants';
import { interpretTrackAddedDiff } from './interpretTrackAddedDiff';
import { interpretTrackDeletedDiff } from './interpretTrackDeletedDiff';
import { interpretTrackEditedDiff } from './interpretTrackEditedDiff';

export function interpretTracksDiff(diff, ...rest) {
  switch (getOr('', 'kind', diff)) {
    case constants.diffKinds.D:
      return interpretTrackDeletedDiff(diff, ...rest);
    case constants.diffKinds.E:
      return interpretTrackEditedDiff(diff, ...rest);
    case constants.diffKinds.N:
      return interpretTrackAddedDiff(diff, ...rest);
    default:
      return actions.unknown();
  }
}
