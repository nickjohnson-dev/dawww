export function setVolume(channel, value) {
  // eslint-disable-next-line no-param-reassign
  channel.volumeNode.volume.value = value;
}
