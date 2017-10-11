import Tone from 'tone';
import * as busChannels from './busChannels';

export default ({ on }) => {
  on(busChannels.BPM_SET, (value) => {
    Tone.Transport.bpm.value = value;
  });

  on(busChannels.PLAYBACK_PAUSE_REQUESTED, () => {
    Tone.Transport.pause();
  });

  on(busChannels.PLAYBACK_START_REQUESTED, () => {
    Tone.Transport.start();
  });

  on(busChannels.PLAYBACK_STOP_REQUESTED, () => {
    Tone.Transport.stop();
  });
};
