let state = {
  channels: {},
  parts: {},
  playbackStateSubscribers: [],
  positionSubscribers: [],
  song: {
    notes: {},
    sequences: {},
    tracks: {},
  },
  transportPart: {},
};

export function getState() {
  return { ...state };
}

export function setState(updates) {
  state = { ...state, ...updates };
}
