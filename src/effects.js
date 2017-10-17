import channelsEffects from './channels/effects';
import partsEffects from './parts/effects';
import playbackStateEffects from './playbackState/effects';
import songEffects from './song/effects';
import transportPartEffects from './transportPart/effects';

export default function effects(...args) {
  channelsEffects(...args);
  partsEffects(...args);
  playbackStateEffects(...args);
  songEffects(...args);
  transportPartEffects(...args);
}
