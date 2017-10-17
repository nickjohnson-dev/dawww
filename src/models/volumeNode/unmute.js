export function unmute(volumeNode) {
  if (!volumeNode.mute) return;

  // eslint-disable-next-line no-param-reassign
  volumeNode.mute = false;
}
