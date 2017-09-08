import { patch } from 'picodom';

const root = document.querySelector('#root');
let oldView;

export default function render(view) {
  // eslint-disable-next-line no-return-assign
  return patch(oldView, (oldView = view), root);
}
