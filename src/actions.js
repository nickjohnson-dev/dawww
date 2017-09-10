export const NOTE_ADDED = 'NOTE_ADDED';
export const NOTE_POINT_X_EDITED = 'NOTE_POINT_X_EDITED';
export const NOTE_POINT_Y_EDITED = 'NOTE_POINT_Y_EDITED';
export const NOTE_SEQUENCE_ID_EDITED = 'NOTE_SEQUENCE_ID_EDITED';
export const UNKNOWN = 'UNKNOWN';

export const noteAdded = note => ({
  type: NOTE_ADDED,
  payload: { note },
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

export const unknown = () => ({
  type: UNKNOWN,
});
