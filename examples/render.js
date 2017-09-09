import { patch } from 'picodom';

const root = document.querySelector('#root');
let element = root;
let oldNode;

export default function render(node) {
  // eslint-disable-next-line no-return-assign
  return element = patch(oldNode, (oldNode = node), element);
}
