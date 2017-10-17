import channelsReducer from './channels/reducer';
import partsReducer from './parts/reducer';
import songReducer from './song/reducer';
import transportPartReducer from './transportPart/reducer';

export default function reducer(state, ...rest) {
  return {
    channels: channelsReducer(state.channels, ...rest),
    parts: partsReducer(state.parts, ...rest),
    song: songReducer(state.song, ...rest),
    transportPart: transportPartReducer(state.transportPart, ...rest),
  };
}
