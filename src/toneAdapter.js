import Tone from 'tone';

export default ({ on }) => {
  on('bpmSet', (value) => {
    Tone.Transport.bpm.value = value;
  });

  on('pause', () => {
    Tone.Transport.pause();
  });

  on('start', () => {
    Tone.Transport.start();
  });

  on('stop', () => {
    Tone.Transport.stop();
  });

  // Tone.Transport.on('position', )
};
