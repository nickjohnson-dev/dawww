export function unmuteChannel(channel) {
  if (!channel.volumeNode.mute) return;

  // eslint-disable-next-line no-param-reassign
  channel.volumeNode.mute = false;
}
