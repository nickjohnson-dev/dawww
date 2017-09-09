import { h } from 'picodom';
import Dawww from '../src';
import render from './render';
import sampleSong from './sampleSong';

const dawww = Dawww({
  song: sampleSong,
});

const view = h('div', {}, [
  h('button', {
    onmousedown: () => {
      dawww.start();
    },
  }, [
    'PLAY',
  ]),
]);

render(view);
