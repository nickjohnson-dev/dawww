import { h } from 'picodom';
import Dawww from '../src';
import render from './render';
import sampleSong from './sampleSong';

const dawww = Dawww({
  song: sampleSong,
});

const view = props => h('div', {}, [
  h('div', {}, [
    props.playbackState,
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
  ]),
]);

dawww.onStateChange((playbackState) => {
  render(view({ playbackState }));
});

render(view({
  playbackState: 'STOPPED',
}));
