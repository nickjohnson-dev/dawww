import { patch } from 'picodom';

const root = document.querySelector('#root');
let element = root;
let oldNode;
let oldProps = {};

export default function render(getNode, propUpdates) {
  const props = {
    ...oldProps,
    ...propUpdates,
  };
  const node = getNode(props);

  element = patch(oldNode, node, element);

  oldNode = node;
  oldProps = props;
}
