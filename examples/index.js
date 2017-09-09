import { h } from 'picodom';
import Dawww from '../src';
import render from './render';
import sampleSong from './sampleSong';

const dawww = Dawww({
  song: sampleSong,
});

const view = props => h('div', {}, [
  h('div', {}, [
    `${props.playbackState}: ${props.time}`,
  ]),
  h('div', {}, [
    h('button', {
      onmousedown: () => {
        dawww.start();
      },
    }, [
      'start',
    ]),
    h('button', {
      onmousedown: () => {
        dawww.stop();
      },
    }, [
      'stop',
    ]),
    h('button', {
      onmousedown: () => {
        dawww.preview(0, 47);
      },
    }, [
      'play C3',
    ]),
  ]),
]);

dawww.onStateChange((playbackState) => {
  render(view, { playbackState });
});

dawww.onTimeChange((time) => {
  render(view, { time });
});

render(view, {
  playbackState: 'STOPPED',
  time: '0:0:0',
});
