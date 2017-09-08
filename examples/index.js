import { h } from 'picodom';
import render from './render';

const view = h('div', {
  onclick: () => {
    console.log('Click!');
  },
}, [
  'Sup',
]);

render(view);
