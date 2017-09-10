import { h } from 'picodom';
import Dawww from '../src';
import render from './render';
import sampleSong from './sampleSong';
import sampleSongAlt from './sampleSongAlt';

const dawww = Dawww({
  song: sampleSong,
});

const view = props => h('div', {}, [
  h('div', {}, [
    props.playbackState,
  ]),
  h('div', {}, [
    props.position,
  ]),
  h('div', {}, [
    props.time,
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
        dawww.updateSong(sampleSong);
      },
    }, [
      'load song',
    ]),
    h('button', {
      onmousedown: () => {
        dawww.updateSong(sampleSongAlt);
      },
    }, [
      'update song',
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

dawww.onPositionChange((position) => {
  render(view, { position });
});

dawww.onStateChange((playbackState) => {
  render(view, { playbackState });
});

dawww.onTimeChange((time) => {
  render(view, { time });
});

render(view, {
  playbackState: 'STOPPED',
  position: 0,
  time: '0:0:0',
});
