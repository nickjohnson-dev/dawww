export const NOTE_ADDED = 'NOTE_ADDED';
export const NOTE_DELETED = 'NOTE_DELETED';
export const NOTE_POINT_ADDED = 'NOTE_POINT_ADDED';
export const NOTE_POINT_DELETED = 'NOTE_POINT_DELETED';
export const NOTE_POINT_X_EDITED = 'NOTE_POINT_X_EDITED';
export const NOTE_POINT_Y_EDITED = 'NOTE_POINT_Y_EDITED';
export const NOTE_SEQUENCE_ID_EDITED = 'NOTE_SEQUENCE_ID_EDITED';
export const SEQUENCE_ADDED = 'SEQUENCE_ADDED';
export const SEQUENCE_DELETED = 'SEQUENCE_DELETED';
export const SEQUENCE_MEASURE_COUNT_EDITED = 'SEQUENCE_MEASURE_COUNT_EDITED';
export const SEQUENCE_POSITION_EDITED = 'SEQUENCE_POSITION_EDITED';
export const SEQUENCE_TRACK_ID_EDITED = 'SEQUENCE_TRACK_ID_EDITED';
export const TRACK_ADDED = 'TRACK_ADDED';
export const TRACK_DELETED = 'TRACK_DELETED';
export const TRACK_IS_MUTED_EDITED = 'TRACK_IS_MUTED_EDITED';
export const TRACK_IS_SOLOING_EDITED = 'TRACK_IS_SOLOING_EDITED';
export const TRACK_VOICE_EDITED = 'TRACK_VOICE_EDITED';
export const TRACK_VOLUME_EDITED = 'TRACK_VOLUME_EDITED';
export const UNKNOWN = 'UNKNOWN';

export const noteAdded = note => ({
  type: NOTE_ADDED,
  payload: { note },
});

export const noteDeleted = note => ({
  type: NOTE_DELETED,
  payload: { note },
});

export const notePointAdded = ({ id, index, value }) => ({
  type: NOTE_POINT_ADDED,
  payload: { id, index, value },
});

export const notePointDeleted = ({ id, index, prevValue }) => ({
  type: NOTE_POINT_DELETED,
  payload: { id, index, prevValue },
});

export const notePointXEdited = ({ id, prevValue, value }) => ({
  type: NOTE_POINT_X_EDITED,
  payload: { id, prevValue, value },
});

export const notePointYEdited = ({ id, prevValue, value }) => ({
  type: NOTE_POINT_Y_EDITED,
  payload: { id, prevValue, value },
});

export const noteSequenceIdEdited = ({ id, prevValue, value }) => ({
  type: NOTE_SEQUENCE_ID_EDITED,
  payload: { id, prevValue, value },
});

export const sequenceAdded = sequence => ({
  type: SEQUENCE_ADDED,
  payload: { sequence },
});

export const sequenceDeleted = sequence => ({
  type: SEQUENCE_DELETED,
  payload: { sequence },
});

export const sequenceMeasureCountEdited = ({ id, prevValue, value }) => ({
  type: SEQUENCE_MEASURE_COUNT_EDITED,
  payload: { id, prevValue, value },
});

export const sequencePositionEdited = ({ id, prevValue, value }) => ({
  type: SEQUENCE_POSITION_EDITED,
  payload: { id, prevValue, value },
});

export const sequenceTrackIdEdited = ({ id, prevValue, value }) => ({
  type: SEQUENCE_TRACK_ID_EDITED,
  payload: { id, prevValue, value },
});

export const trackAdded = ({ isAnyTrackSoloing, track }) => ({
  type: TRACK_ADDED,
  payload: { isAnyTrackSoloing, track },
});

export const trackDeleted = track => ({
  type: TRACK_DELETED,
  payload: { track },
});

export const trackIsMutedEdited = ({ id, prevValue, value }) => ({
  type: TRACK_IS_MUTED_EDITED,
  payload: { id, prevValue, value },
});

export const trackIsSoloingEdited = ({ id, prevValue, value }) => ({
  type: TRACK_IS_SOLOING_EDITED,
  payload: { id, prevValue, value },
});

export const trackVoiceEdited = ({ id, prevValue, value }) => ({
  type: TRACK_VOICE_EDITED,
  payload: { id, prevValue, value },
});

export const trackVolumeEdited = ({ id, prevValue, value }) => ({
  type: TRACK_VOLUME_EDITED,
  payload: { id, prevValue, value },
});

export const unknown = () => ({
  type: UNKNOWN,
});
