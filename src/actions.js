export const BPM_CHANGED = 'BPM_CHANGED';
export const MEASURE_COUNT_CHANGED = 'MEASURE_COUNT_CHANGED';
export const NOTE_ADDED = 'NOTE_ADDED';
export const NOTE_DELETED = 'NOTE_DELETED';
export const NOTE_PLAYED = 'NOTE_PLAYED';
export const NOTE_POINT_ADDED = 'NOTE_POINT_ADDED';
export const NOTE_POINT_DELETED = 'NOTE_POINT_DELETED';
export const NOTE_POINT_X_EDITED = 'NOTE_POINT_X_EDITED';
export const NOTE_POINT_Y_EDITED = 'NOTE_POINT_Y_EDITED';
export const NOTE_SEQUENCE_ID_EDITED = 'NOTE_SEQUENCE_ID_EDITED';
export const PLAYBACK_STATE_SET = 'PLAYBACK_STATE_SET';
export const POSITION_SET = 'POSITION_SET';
export const SEQUENCE_ADDED = 'SEQUENCE_ADDED';
export const SEQUENCE_DELETION_ACCEPTED = 'SEQUENCE_DELETION_ACCEPTED';
export const SEQUENCE_DELETION_REQUESTED = 'SEQUENCE_DELETION_REQUESTED';
export const SEQUENCE_MEASURE_COUNT_EDITED = 'SEQUENCE_MEASURE_COUNT_EDITED';
export const SEQUENCE_POSITION_EDITED = 'SEQUENCE_POSITION_EDITED';
export const SEQUENCE_STEP_TRIGGERED = 'SEQUENCE_STEP_TRIGGERED';
export const SEQUENCE_TRACK_ID_EDITED = 'SEQUENCE_TRACK_ID_EDITED';
export const SONG_UPDATED = 'SONG_UPDATED';
export const TRACK_ADDED = 'TRACK_ADDED';
export const TRACK_DELETED = 'TRACK_DELETED';
export const TRACK_IS_MUTED_EDITED = 'TRACK_IS_MUTED_EDITED';
export const TRACK_IS_SOLOING_EDITED = 'TRACK_IS_SOLOING_EDITED';
export const TRACK_VOICE_EDITED = 'TRACK_VOICE_EDITED';
export const TRACK_VOLUME_EDITED = 'TRACK_VOLUME_EDITED';
export const UNKNOWN = 'UNKNOWN';

export const bpmChanged = bpm => ({
  type: BPM_CHANGED,
  payload: { bpm },
});

export const measureCountChanged = measureCount => ({
  type: MEASURE_COUNT_CHANGED,
  payload: { measureCount },
});

export const noteAdded = note => ({
  type: NOTE_ADDED,
  payload: { note },
});

export const noteDeleted = note => ({
  type: NOTE_DELETED,
  payload: { note },
});

export const notePlayed = ({ length, pitch, position, time, trackId }) => ({
  type: NOTE_PLAYED,
  payload: { length, pitch, position, time, trackId },
});

export const notePointAdded = ({ id, index, value }) => ({
  type: NOTE_POINT_ADDED,
  payload: { id, index, value },
});

export const notePointDeleted = ({ id, index, prevValue }) => ({
  type: NOTE_POINT_DELETED,
  payload: { id, index, prevValue },
});

export const notePointXEdited = ({ id, index, prevValue, value }) => ({
  type: NOTE_POINT_X_EDITED,
  payload: { id, index, prevValue, value },
});

export const notePointYEdited = ({ id, index, prevValue, value }) => ({
  type: NOTE_POINT_Y_EDITED,
  payload: { id, index, prevValue, value },
});

export const noteSequenceIdEdited = ({ id, prevValue, value }) => ({
  type: NOTE_SEQUENCE_ID_EDITED,
  payload: { id, prevValue, value },
});

export const playbackStateSet = playbackState => ({
  type: PLAYBACK_STATE_SET,
  payload: { playbackState },
});

export const positionSet = position => ({
  type: POSITION_SET,
  payload: { position },
});

export const sequenceAdded = sequence => ({
  type: SEQUENCE_ADDED,
  payload: { sequence },
});

export const sequenceDeletionAccepted = sequence => ({
  type: SEQUENCE_DELETION_ACCEPTED,
  payload: { sequence },
});

export const sequenceDeletionRequested = sequence => ({
  type: SEQUENCE_DELETION_REQUESTED,
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

export const sequenceStepTriggered = payload => ({
  type: SEQUENCE_STEP_TRIGGERED,
  payload,
});

export const sequenceTrackIdEdited = ({ id, prevValue, value }) => ({
  type: SEQUENCE_TRACK_ID_EDITED,
  payload: { id, prevValue, value },
});

export const songUpdated = ({ prevSong, song }) => ({
  type: SONG_UPDATED,
  payload: { prevSong, song },
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
