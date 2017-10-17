export function mute(volumeNode) {
  if (volumeNode.mute) return;

  // eslint-disable-next-line no-param-reassign
  volumeNode.mute = true;
}
